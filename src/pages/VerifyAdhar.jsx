import React from "react";

import { useState } from "react";





const VerifyAdhar = () => {
       const [selectedFile, setselectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [password, setPassword] = useState("");

 

    const handleSubmit = async(event)=>{
        event.preventDefault();

        // if file is not selected -> alert:
        if (!selectedFile){
            alert('Please select a valid PDF file');
            return;
        }

        if (!password){
            alert("Please enter the password");
            return;
        }

        setIsUploading(true);

        const formData = new FormData(); // this object is specifically used to send file like data (file uploads) to the backend
        formData.append("aadhaarPdf", selectedFile);
        formData.append("password", password);

        try{
            // send data to backend route using fetch:
            const response = await fetch('http://localhost:3000/upload-adhaar', {
                method:"POST",
                body:formData
            });

            if (response.ok){
                alert("Adhaar PDF processed successfully");
            } else {
                // throw an error:
                const errorData = await response.json();
                throw new Error(errorData.error || 'Upload failed');
            } 

        } catch(error){
            console.error('Upload error : ', error.message);
            alert('Upload failed : ', error.message);

        } finally{
            setIsUploading(false);
        }


    }
    const handleFileChange = (event)=>{
        const file = event.target.files[0];

        // check if it is a valid file:
        if (file && file.type == 'application/pdf'){
              setselectedFile(file);
        } else{
            alert("Please select a valid PDF file");
        }

    }

 

  return (
    <div className="h-screen w-full">
        <div className="flex flex-col items-center h-full w-full justify-center gap-4">
            <h2 className="text-xl text-amber-500 font-semobold text-center">Verify Adhaar</h2>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center gap-3">
                    <label htmlFor="adharFile"> Upload Adhaar PDF</label>
                        <input
                        id="adharFile"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="px-5 py-3 border rounded-lg"
                        />

                        <input
                        placeholder="Enter the password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-2 py-2 border outline-none rounded-lg"

                        />

                    <button type="submit"
                     disabled={!selectedFile || isUploading}
                     className="px-5 py-2 bg-amber-400 rounded-lg text-white font-semibold"

                    >
                    {isUploading ? 'Processing' : 'Upload PDF'}

                    </button>

               
                </div>

            </form>

        </div>

    </div>
  )
}

export default VerifyAdhar;