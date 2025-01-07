import { useNavigate } from "react-router-dom"
import "./Notfound.css"

function NotFound() {
    const navigate = useNavigate()
  return (
    <div className="notFound">
        <h1>404: Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>

        <button onClick={()=>navigate("/")}>Go Back</button>
    </div>
  )
}

export default NotFound