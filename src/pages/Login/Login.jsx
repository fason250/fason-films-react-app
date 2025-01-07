/* eslint-disable no-unused-vars */
import { useState } from "react"
import { signIn,signUp } from "../../config/firebase.js"
import logo from "../../assets/fasonfilms_final.png"
import loadingAnimation from "../../assets/netflix_spinner.gif"
import "./Login.css"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

function Login() {
  const [signState,setSignState] = useState("Sign In")
  const [userData, setUserData ] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [isLoading,setIsloading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault()
    try{

        const form = event.currentTarget
        const dataSubmited = new FormData(form)
        const name = dataSubmited.get("name")
        const email = dataSubmited.get("email")
        const password = dataSubmited.get("password")

        setUserData(prevUserData => ({...prevUserData,name,email,password}))
        setIsloading(true)

        if(signState === "Sign In"){
          if(email && password){
              await signIn(email,password)
              form.reset()
              navigate("/")
              toast.success("login successfully")
          }else{
            toast.error("email and password are required!")
          }
        }
        
        if(signState === "Sign Up"){
          if(name && email && password){
              await signUp(name,email,password)
              form.reset()  
              navigate("/login")
              toast.success("account created")
          }else{
            toast.error("name, email and password are required!")
          }
        }
        setIsloading(false)

    }catch(error){
      console.log(error)
      toast.error(error.code.split("/")[1].split("-").join(" "))
    }
    
  }

  return (
    
     isLoading ? (<div className="loading"> <img src={loadingAnimation} alt="loading gif" /> </div> ): (
    <div className="login">
      <img src={logo} alt="logo" className="login-logo"/> 
      <div className="login-form">
        <h2>{signState}</h2>
        <form onSubmit={handleSubmit}>
          
          { signState === "Sign In" ?  "" : <input type="text"  name="name" placeholder="Your name" />}
          <input type="email"  name="email" placeholder="Email" />
          <input type="password"  name="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="remember" id="remember"/>
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p style={{cursor: "pointer"}}>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            signState === "Sign In" ?
             (  <p>New To FasonFilms? <span onClick={()=>setSignState("Sign Up")}>Sign Up Now</span></p>) : 
             (<p>Already have account? <span onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>)

          }

        </div>
      </div>   
    </div>)
    
    
  )
}

export default Login