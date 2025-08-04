const hre = require("hardhat"); // hre -> hardhat runtime environment -> uses ethers.js (a library to talk to Ethereum)
// hardhat is a development tool -> that helps us:
/*
compile the contract, run tests and deploy it to local blockchain or testnet
*/

const {ethers} = hre;

const constituency_data = require("../utils/constituencies.json");
const candidates_data = require("../utils/candidates.json");


// this main function will deploy the contract:
async function main() {
  const Voting = await hre.ethers.getContractFactory("LokSabhaVoting"); // trying to load the contract
  const voting = await Voting.deploy();  // smart contract is sent as a transaction -> now this voting is contract instance that can be used to call functions of smart contract

  await voting.waitForDeployment(); // waits until the contract is deployed
  console.log("Voting contract deployed to:", await voting.getAddress());


    const BATCH_SIZE = 20;

    for (const state in constituency_data){
        const allConstituencies = constituency_data[state]; // get all constituencies of a state

        // now loop through each constituency -> get its candidates and push:
        for (let i = 0; i < allConstituencies.length; i+= BATCH_SIZE){
            const batch = allConstituencies.slice(i, i + BATCH_SIZE);

            for (const constituency of batch){
                // fetch candidates of this constituency:
                const entry = candidates_data.candidatesData.find(
                    (item) => item.name == constituency
                );

                if (!entry){
                    console.log(`No candidate data for ${constituency} , skipping`);
                    continue;
                }

                const names = entry.candidates.map((c)=> c.name);
                const parties = entry.candidates.map((c) => c.party);
                const symbols = entry.candidates.map((c) => c.symbol);

                try{
                    const tx = await voting.addConstituency(constituency, names, parties, symbols);  // when we're calling this function -> we're actually sending a transaction to the blockchain -> tx is a Transaction Response Object -> contains metadata -> eg. tx.hash, tx.gasLimit, tx.wait() -> a method to wait until the transaction is confirmed
                    await tx.wait();

                    console.log(`Added ${constituency} with ${names.length} candidates`);
                } catch(error){
                    console.log(`Failed to add ${constituency} `, error.message);
                }
            }

        }

    }

    console.log("Deployment and initialisation complete!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1; // tells the Node.js to exit the program with failure status -> process is a global object in Node.js that provides information and control over the current running Node.js process -> this process is not of the entire Node.js server here -> process that is running the current script -> here it is deploy.js 
  
  // if the process (Node.js script) failed -> exit with a non-zero number (1,2,3) etc.
  // if it is success -> exit with 0 
});


//  const voting = await Voting.deploy(); 

/* step by step procedure of contract deployment:
   HardHat -> compiles the code -> converts it into bytecode and ABI (Application Binary Interface)
   Bytecode is what actually gets deployed
   ABI is used to interact with contract later

   
   jab ham deploy krte hain -> Hardhat sends a transaction -> that contains -> bytecode of the contract, any constructor arguements, gas limit and sender (your wallet address)

   Blockchain processes this transaction -> Miners/validators pick it up, They include it in the next block, The contract is now permanently stored in that block.
   The contract is assigned an address (smart contracts have unique addresses on blockchain)
   Now your app can call functions on this contract using this address

   It's now live and immutable:
   Your contract is now live on the blockchain
   It cannot be changed (immutable)
   now , no one can change vote counts, change candidate names, delete votes, inject fake votes

   Every vote is a blockchain transaction
   When someone calls the vote() function in the contract:
   It's sent as a transaction


   Data is stored Across All nodes:
   Blockchain is decentralised -> Data is not stored in one server - its copied across thousands of computers (nodes)
   so even if -> one computer is hacked or One govt tries to erase votes or One data center crashes -> The data is safe. It lives everywhere


   why are we using batch here ?? -> actually ye sare candidates, constituencies etc ka data smart contract ke sath deploy nhi horaha -> cuz if the data is too long -> it will exceed the block's gas limit -> entire transaction might fail

   so first we deploy the contract (all the functions, state variables etc) -> then we deploy these constituencies and candidate data -> that too in batches of 20 -> first 20 constituencies data will be sent as transaction , when this transaction will be confirmed, we'll send the next 20 constituencies data

   when we deploy smart contract for the first time -> it'll capture the deployer address -> so it'll verify in other functions if the function was run by the owner or not


*/


// compile the code and deploy it on local blockchain 
