// AuthContext.tsx
import { createContext, useState, useContext } from "react";

// interface User {
//   name: string;
//   email: string;
// }

interface AuthContextType {
  isLoggedIn: boolean;
  user:string;
  login: (user:string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user:"",
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  
  const login = (userData:string) =>{
    setIsLoggedIn(true);
    setUser(userData);
  } 
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn,user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
