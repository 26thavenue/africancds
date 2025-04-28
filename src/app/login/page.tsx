'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { useAuth } from "../context"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (login(username, password)) {
      router.push("/host"); 
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="text-black p-8 lg:p-24">
      <h1 className="text-2xl lg:text-5xl my-8 font-bold">Admin Login</h1>

      {error && (
        <div className="border-l-4 my-8 max-w-xl border-red-600 p-8 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="p-8 border border-gray-200 justify-center shadow max-w-2xl flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="max-w-md px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="px-24 cursor-pointer hover:bg-primary/90 transition-colors max-w-md py-3 rounded-lg bg-primary text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}
