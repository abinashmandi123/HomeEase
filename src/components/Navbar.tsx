import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useAuth } from "./AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Navbar = () => {
const [active,setActive]=useState('Dashboard');
const [searchOpen,setSearchOpen]=useState(false);
const {isLoggedIn,user,logout}=useAuth();
const navigate=useNavigate();

const searchInput=useRef<HTMLInputElement>(null);

useEffect(()=>{
  if(searchOpen && searchInput.current){
    searchInput.current.focus();
  }
},[searchOpen])

const toggleSearch=()=>{
  setSearchOpen(!searchOpen);
}

  return (
    <nav className="fixed top-0 w-full py-3 backdrop-blur-lg border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0 items-center">
            <img src="/logo.png" alt="Your Company" className="h-8 w-auto" />
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-4">
              <button className={`rounded-md text-gray-300 hover:bg-white/5 text-white px-3 py-2 text-sm font-medium ${active==='Dashboard'?'border border-white/50':''}`} onClick={()=>{
                setActive('Dashboard');
                navigate("/")
                }}>Home</button>
              <button className={`rounded-md text-gray-300 hover:bg-white/5 text-white px-3 py-2 text-sm font-medium ${active==='Team'?'border border-white/50':''}`} onClick={()=>setActive('Team')}>About</button>
              <button className={`rounded-md text-gray-300 hover:bg-white/5 text-white px-3 py-2 text-sm font-medium ${active==='Projects'?'border border-white/50':''}`} onClick={()=>setActive('Projects')}>Service</button>
              <button className={`rounded-md text-gray-300 hover:bg-white/5 text-white px-3 py-2 text-sm font-medium ${active==='Calendar'?'border border-white/50':''}`} onClick={()=>setActive('Calendar')}>Pages</button>
            </div>
          </div>
          <div className="right-0 flex gap-4 items-center pr-2">
            
              {searchOpen?(<input ref={searchInput} className="pl-10 pr-10 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" onBlur={toggleSearch}/>
          ):(
          <button className="ml-auto" onClick={toggleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>)}
          {!isLoggedIn ? (<>
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500  text-white border border-white/30 transform hover:scale-105 transition" onClick={()=>navigate("/login")}>Login</button>
            <button className="px-6 py-2 rounded-lg  bg-gradient-to-r from-indigo-500 to-pink-500 text-white border border-white/30 transform hover:scale-105 transition" onClick={()=>navigate("/register")}>Sign Up</button>
          </>):(
            <DropdownMenu>
              <DropdownMenuTrigger>
                <button className="flex items-center gap-2">
                  <User/>
                  <span>{user}</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="text-red-600">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
  }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
