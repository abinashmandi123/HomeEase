
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext'
import Register from './components/Register'
import Home from './components/Home'
import UserPage from './components/UserPage'

function App() {

  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path='/user' element={<UserPage/>}/>
      </Routes>
      </AuthProvider>
      
    </Router>
    
  )
}

export default App

