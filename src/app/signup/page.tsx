"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
        qualification: "",
        contact: "",
        address: "",
        role: "",
        isAdmin: false,
        isOphthalmologist: false

    })

    const isFormValid = () => {
        return user.email.length > 0 && user.password.length > 0 && user.qualification.length > 0 && user.address.length >0 && user.contact.length >0 && user.username.length >0;
    };

    const onSignup = async () => {
        try {
            if (user.role === "admin") {
                // Set isAdmin to true
                user.isAdmin === true;
            } else if (user.role === "ophthalmologist") {
                // Set isOphthalmologist to true
                user.isOphthalmologist = true;
            }
            console.log(user.role)
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");

        } catch (error: any) {
            console.log("Signup failed", error.message);
            alert('An account with provided Email already exists </br> Please provide a diffrent email address');
            toast.error(error.message);
        }
    }




    return (

        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 bg-gray-700 rounded-md shadow-md lg:max-w-xl">
                <div className="flex justify-center">
                    <Image
                        src="/logo.png" // Replace with the actual path to your logo image
                        alt="Your Logo Alt Text"
                        width={240} // Adjust the width to your desired size
                        height={240} // Adjust the height to your desired size
                    />
                </div>
                <h1 className="mt-4 text-2xl font-bold text-yellow-400 text-center">Signup</h1>
                
                <div className="mt-4 text-yellow-400 mb-4">
                    <label htmlFor="username">Name</label>
                    <input
                        className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                        id="username"
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="username"
                    /> </div>
                <div className="mt-4 text-yellow-400 mb-4">
                <label htmlFor="username">Qualification</label>
                <input
                    className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                    id="qualification"
                    type="text"
                    value={user.qualification}
                    onChange={(e) => setUser({ ...user, qualification: e.target.value })}
                    placeholder="Qualification"
                /> </div>
                <div className="mt-4 text-yellow-400 mb-4">
                <label htmlFor="role">Role</label>
                <select
                    className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                    id="role"
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                    
                    <option></option>
                    <option value="admin">Admin</option>
                    <option value="ophthalmologist">Ophthalmologist</option>
                </select>
            </div>
            
            <div className="mt-4 text-yellow-400 mb-4">
                <label htmlFor="email">Contact</label>
                <input
                    className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                    id="contact"
                    type="text"
                    value={user.contact}
                    onChange={(e) => setUser({ ...user, contact: e.target.value })}
                    placeholder="Contact"
                /></div>
            <div className="mt-4 text-yellow-400 mb-4">
                <label htmlFor="email">Address</label>
                <input
                    className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                    id="address"
                    type="text"
                    value={user.address}
                    onChange={(e) => setUser({ ...user, address: e.target.value })}
                    placeholder="Address"
                /></div>
            <div className="mt-4 text-yellow-400 mb-4">
                <label htmlFor="email">Email</label>
                <input
                    className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                /></div>

            <div className="mt-4 text-yellow-400 mb-4">
                <label htmlFor="password">Password</label>
                <input
                    className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="password"
                /></div>
            <button
                onClick={onSignup}
                className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform ${isFormValid()
                    ? "bg-yellow-600 hover:bg-yellow-700"
                    : "bg-gray-400 cursor-not-allowed"
                    } rounded-md focus:outline-none`}
                disabled={!isFormValid()}>Register</button>
            <p className="mt-4 text-sm text-center text-white">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-blue-600 hover:underline">
                    Log in
                </Link> </p>
        </div></div >
    )

}