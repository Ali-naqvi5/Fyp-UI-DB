"use client"

import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import React, {useState,useEffect, FC} from "react";
import {toast} from "react-hot-toast";
import { useRouter } from "next/navigation";


function Navbar() {
const [user, setUser] = useState({
    
    role: "", 
  });
useEffect(() => {
    // Fetch user data including role when the user logs in
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users/me");
        const userData = response.data.data;
        setUser({ ...userData, role: userData.role });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Call the fetchUserData function when the component mounts
    fetchUserData();
  }, []);

 
 
    
  if (user.role === "admin") {
    return (
      <AdminNavbar/>
    );
  } else {
    return (
      <UserNavbar/>
    );
  }
}
  

const AdminNavbar: React.FC = () => {
    
const router = useRouter()

const logout = async () => {
    try {
        await axios.get('/api/users/logout')
        toast.success('Logout successful')
        router.push('/login')
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
    }
}
    return (
        <nav className="bg-gray-700 h-12  flex justify-between items-center">

            <div className="transition-transform hover:scale-150">
                <Link href="/profile">
                    <Image
                        src="/nlogo.png"
                        alt="Retina Guard"
                        width={120}
                        height={120}

                    /></Link></div>

            <div className="flex">
                <ul className="flex space-x-10">
                    <li className=" text-amber-400 transition-transform  hover:text-white " >
                        <Link href="/profile">

                            Dashboard

                        </Link>
                    </li>
                    <li className=" text-amber-400 transition-transform  hover:text-white">
                        <Link href="/Patients">

                            Patient

                        </Link>
                    </li>
                    <li className=" text-amber-400  transition-transform  hover:text-white">
                        <Link href="/ophthalmologist">

                            Ophthalmologist

                        </Link>
                    </li>
                    <li className=" text-amber-400  transition-transform  hover:text-white">
                        <Link href="/About">

                            About us

                        </Link>
                    </li>


                </ul>



            </div>

            <ul className="flex space-x-7 px-3">
            <li className=" transition-transform hover:scale-125">
                        <Link href="/">

                            Settings

                        </Link>
                    </li>
                    <li className=" text-amber-400 transition-transform hover:scale-125 hover:text-red-500 " >
                    <button
        onClick={logout}>Logout</button>
                    </li>
                    
                    </ul>
         

        </nav>
    );
};


const UserNavbar: React.FC = () => {
    
const router = useRouter()

const logout = async () => {
    try {
        await axios.get('/api/users/logout')
        toast.success('Logout successful')
        router.push('/login')
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
    }
}
    return (
        <nav className="bg-gray-700 h-12  flex justify-between items-center">

            <div className="transition-transform hover:scale-150">
                <Link href="/profile">
                    <Image
                        src="/nlogo.png"
                        alt="Retina Guard"
                        width={120}
                        height={120}

                    /></Link></div>

            <div className="flex">
                <ul className="flex space-x-10">
                    <li className=" text-amber-400 transition-transform  hover:text-white " >
                        <Link href="/profile">

                            Dashboard

                        </Link>
                    </li>
                    <li className=" text-amber-400 transition-transform  hover:text-white">
                        <Link href="/Patients">

                            Patient

                        </Link>
                    </li>
                    <li className=" text-amber-400  transition-transform  hover:text-white">
                        <Link href="/About">

                            About us

                        </Link>
                    </li>


                </ul>



            </div>

            <ul className="flex space-x-7 px-3">
            <li className=" transition-transform hover:scale-125">
                        <Link href="/">

                            Settings

                        </Link>
                    </li>
                    <li className=" text-amber-400 transition-transform hover:scale-125 hover:text-red-500 " >
                    <button
        onClick={logout}>Logout</button>
                    </li>
                    
                    </ul>
         

        </nav>
    );
};

export default Navbar;