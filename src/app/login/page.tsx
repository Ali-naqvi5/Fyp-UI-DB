"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";





export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })



    const isFormValid = () => {
        return user.email.length > 0 && user.password.length > 0;
    };
    const onLogin = async () => {
        try {

            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);
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
                <h1 className="mt-4 text-2xl font-bold text-yellow-400 text-center">
                    Login
                </h1>

                <br />
                <div className="mt-4 text-yellow-400 mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        className="w-full px-4 py-2 mt-1 bg-gray-600 rounded-md focus:ring focus:ring-yellow-600 focus:outline-none"
                        id="email"
                        type="text"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="email"
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
                    onClick={onLogin}
                    className={`w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform ${isFormValid()
                        ? "bg-yellow-600 hover:bg-yellow-700"
                        : "bg-gray-400 cursor-not-allowed"
                        } rounded-md focus:outline-none`}
                    disabled={!isFormValid()}>Login</button><br />
                <p className="mt-4 text-sm text-center text-white">
                    Don't have an account?{" "}
                    <Link href="/signup" className="font-medium text-blue-600 hover:underline">
                        Sign up
                    </Link> </p>
            </div></div>
    )

}