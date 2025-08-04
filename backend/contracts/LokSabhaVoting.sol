// SPDX-License-Identifier : GPL-3.0 
// license tells the user -> what they can do with the data -> GPL is General Public License -> which says 
// you can use, change this code -> but when published -> you need to publish under the same license

pragma solidity >=0.7.0 <= 0.9.0;

contract LokSabhaVoting{
    address public admin; 
    uint public votingStart;
    uint public votingEnd;

    // Candidate:
    struct Candidate{
        string name;
        uint voteCount;
        string party;
        string symbol;
    }

    // Constituency : name, list of candidates, list of voters:
    struct Constituency{
        string  name; 
        Candidate[] candidates; // list of candidates of that constituency
        mapping(string => bool) hasVoted; // voterId : true/false based on if they have already voted or not
    }

    mapping(string => Constituency) private constituencies; // access the details of a specific constituency

    string[] public constituencyNames;

    constructor(){
        admin = msg.sender;
    }

    // Add constituencies and its candidates (only admin can do that)
    function addConstituency(string memory _name, string [] memory _candidates, string [] memory parties, string [] memory symbols ) public{
        require(msg.sender == admin, "Only admin can add constituencies");

        require(_candidates.length == parties.length && parties.length == symbols.length, "Input arrays must be of equal length");

        Constituency storage c = constituencies[_name]; // get the reference of the specific constituency from mapping:
        c.name = _name;
        
        // create Candidate struct for each candidate and push to the array:
        for (uint i = 0; i < _candidates.length; i++){
            c.candidates.push(Candidate({name: _candidates[i], voteCount: 0, party: parties[i], symbol: symbols[i]}));
        }
        constituencyNames.push(_name);
    }

    // get all constituency names:
    function getAllConstituencies() public view returns (string [] memory){
        return constituencyNames;
    }

    // Get candidates of a specific constituency:
    function getCandidates(string memory constituencyName) public view returns (string [] memory){

        Constituency storage c = constituencies[constituencyName]; // directly access from storage -> since mappings
        // don't return the memory copies of complex data structures -> so we use direct reference of original

        // we can't simply return an array of structures, hence we create a new array and copy candidate 
        // names to it:
        string[] memory candidates = new string[](c.candidates.length);

        for (uint i = 0; i < c.candidates.length; i++){
            candidates[i] = c.candidates[i].name;
        }

        return candidates;
    }

    // check if voter has already voted:
    function hasVoted(string memory constituencyName, string memory voterId) public view returns (bool){
       return constituencies[constituencyName].hasVoted[voterId];
    }


    // Vote for a candidate using index:
    function vote(string memory constituencyName, uint candidateIndex, string memory voterId) public {
        require(block.timestamp > votingStart, "Voting has not started yet");

        require(block.timestamp < votingEnd, "Voting has ended");
        Constituency storage c = constituencies[constituencyName];

        // check if already voted:
        require(!c.hasVoted[voterId], "You have already voted for this constituency");

        require(candidateIndex < c.candidates.length && candidateIndex >= 0, "Invalid candidate index");

        // now access that candidate and increment its vote count:
        c.candidates[candidateIndex].voteCount += 1;
        
        // mark hasVoted as true for the voter:
        c.hasVoted[voterId] = true;

    }

    // Get vote count of a candidate:
    function getVoteCount(string memory constituencyName, uint candidateIndex) public view returns (uint){
        return constituencies[constituencyName].candidates[candidateIndex].voteCount;
    }


    // set the voting time (admin only):
    function setVotingTime(uint _startTimeStamp, uint _endTimeStamp) public{
        require(msg.sender == admin, "Only admin can set voting timings");

        require(_startTimeStamp < _endTimeStamp, "Start must be before end");

        votingStart = _startTimeStamp;
        votingEnd = _endTimeStamp;

    }

    // is voting open:
    function isVotingOpen() public view returns (bool){
        return block.timestamp >= votingStart && block.timestamp <= votingEnd;
    }

    // get winner:
    function getWinner(string memory constituencyName) public view returns (string memory winnerName, uint voteCount){
         require(block.timestamp > votingEnd, "Voting is still ongoing");

         Constituency storage c = constituencies[constituencyName];
         uint maxVotes = 0;
         uint winnerIndex = 0;

         for (uint i = 0; i < c.candidates.length; i++){
            if (c.candidates[i].voteCount > maxVotes){
                maxVotes = c.candidates[i].voteCount;
                winnerIndex = i;
            }
         }

         return (c.candidates[winnerIndex].name, maxVotes);


    }








}