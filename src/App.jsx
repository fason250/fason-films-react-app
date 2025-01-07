import { Routes, Route , useNavigate} from "react-router-dom"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./config/firebase.js"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Player from "./pages/Player/Player"
import { ToastContainer } from "react-toastify"
import NotFound from "./pages/NotFound/NotFound.jsx"

 
function App() {
  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("logged in")
      }else{
        console.log("logged out")
        navigate("/login")
      }
    })
  },[])



  return (
   <main>
    <ToastContainer theme="dark"/>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/login" element={< Login />} />
      <Route path="/player/:videoId" element={<Player />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
   </main>
  )
}

export default App
