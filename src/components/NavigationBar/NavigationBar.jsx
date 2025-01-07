import { useEffect, useRef } from "react"
import { logout } from "../../config/firebase"
import logo from "../../assets/fasonfilms_final.png"
import searchIcon from "../../assets/search_icon.svg"
import NotificationIcon from "../../assets/bell_icon.svg"
import ProfileImage from "../../assets/profile_img.png"
import dropDownIcon from "../../assets/caret_icon.svg"
import "./navigationbar.css"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

function NavigationBar() {
  const navRef = useRef(null)
  const navigate = useNavigate()

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 80){
        navRef.current.classList.add("nav-dark")
      }else{
        navRef.current.classList.remove("nav-dark")
      }
    })
  },[])

  async function handleLogout(){
     await logout()
     navigate("/login")

     toast.success("sign out successfully")
  }

  return (
    <div className="nav-bar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="webiste logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="search Icon" className="icons"/>
        <p>Children</p>
        <img src={NotificationIcon} alt=" notification icon" className="icons" />
        <div className="nav-bar-profiles">
          <img src={ProfileImage} alt="profile Image" className="profile"/>
          <img src={dropDownIcon} alt="drop down icon" />
          <div className="dropdown">
          <p onClick={handleLogout}>Logout of Account</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar