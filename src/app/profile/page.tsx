"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState , useEffect} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import Navbar from "../components/nav"


export default function ProfilePage() {
    const [user, setUser] = useState({
        username: "",
        qualification: "",
        isAdmin: false,
        role:""
      });

useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/me");
        const userData = response.data.data;
        // Update the user state with the fetched data
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:");
        toast.error("Error fetching user data");
      }
    };

    fetchUserData();
  }, []);
      
      
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleSubmit = () => {
        // Handle the submit action here
        if (selectedFile) {
            // Upload the selectedFile or perform other actions
            alert('Image submitted!');
        } else {
            alert('Please select an image first.');
        }
    };

    return (
        <div className="bg-gray-600">
            <Navbar/>
             <div className="bg-gray-600 mt-4 ml-4 text-yellow-400" >
            <h2 className="text-2xl bg-gray-600 font-semibold">{user.role.toUpperCase()} ACCOUNT</h2>
            <h2 className="text-2xl bg-gray-600 font-semibold">{user.username}</h2>
            
          </div>
            <div className="bg-gray-600 min-h-screen flex items-center justify-evenly">
                
                <div className="container mx-auto p-4 bg-gray-700 rounded-lg shadow-md">
                
                   

                    {/* File Input */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        className="mb-4"
                    />

                    {/* Drag-and-Drop Area */}
                    <div
                        className="border-2 border-dashed border-gray-300 p-4 text-center cursor-pointer"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        {selectedFile ? (
                            <div>
                                <p className="text-lg font-semibold mb-2">Selected Image:</p>
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Selected"
                                    className="max-w-md mx-auto"
                                />
                            </div>
                        ) : (
                            <p className="text-lg font-semibold">
                                Drag and drop an image here or select from files
                            </p>
                        )}
                    </div>
                    <div className='flex justify-center'>
                    <button 
                        onClick={handleSubmit}
                        className={`  px-4 py-2 mt-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors duration-200 ${selectedFile ? '' : 'cursor-not-allowed bg-gray-400'
                            }`}
                        disabled={!selectedFile}
                    >
                        Submit
                    </button>
                    </div>

                    {/* Submit Button */}
                    
                </div>
            </div>


            </div>
    )
}