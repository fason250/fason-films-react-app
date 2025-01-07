import "./Footer.css"
import YoutubeIcon from "../../assets/youtube_icon.png"
import TwitterIcon from "../../assets/twitter_icon.png"
import InstagramIcon from "../../assets/instagram_icon.png"
import FaceBookIcon from "../../assets/facebook_icon.png"
    
function Footer() {
  return (
    <footer>
        <div className="footer-icons">
          <img src={FaceBookIcon} alt="facebook icon" />
          <img src={InstagramIcon} alt="instagram icon" />
          <img src={TwitterIcon} alt="twitter icon" />
          <img src={YoutubeIcon} alt="youtube icon" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relation</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Inforamtion</li>
          <li>Contact Us</li>
        </ul>
        <p className="copyright">&copy; {new Date().getFullYear()} FasonFilms, Inc.</p>
    </footer>
  )
}

export default Footer