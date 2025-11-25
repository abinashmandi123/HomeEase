import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { motion } from "framer-motion";

const Login = () => {
const navigate=useNavigate();
const {login}=useAuth();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const handleSubmit=async (e:any)=>{
    e.preventDefault();


    const loginData={
        email,
        password
    }

    try{
      const response=await fetch('http://localhost:8080/user/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(loginData)
    })
    console.log(response);
    if(response.status==200){
      const data=await response.json();
        login(data.name);
        console.log(data.name)
        navigate("/user");
    }
    }catch(error){
      console.log(error)
    }
 }

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}   // starts above the screen
      animate={{ opacity: 1, y: 0 }}       // slides to center
      exit={{ opacity: 0, y: -200 }}       // optional: slides up when leaving
      transition={{ duration: 0.8, ease: "easeOut" }}  // smooth animation
      className="min-h-screen items-center justify-center"
    >
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-200">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="hover:text-pink-300 transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Login
          </button>

          <p className="text-center text-gray-200 text-sm mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-pink-300 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
    </motion.div>
  )
}

export default Login
