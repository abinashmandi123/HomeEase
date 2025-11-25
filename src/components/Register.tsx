import { useState } from 'react';
import { motion } from "framer-motion";
const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
     const role='USER';

    const handleSubmit=async(e:any)=>{
        console.log("Registering User");
        console.trace();
        e.preventDefault(); 
        const data={
        name,
        email,
        password,
        role
    }
        try{
            const response=await fetch('http://localhost:8080/user/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        console.log(response);
        }
        catch (error) {
            console.error("Error:", error);
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
          Register at HomeEase
        </h2>
        <form  className="space-y-5" onSubmit={handleSubmit}>
            <div>
            <label className="block text-sm font-medium text-white mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
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
                value={password}
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-lg font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </motion.div>
  )
}

export default Register
