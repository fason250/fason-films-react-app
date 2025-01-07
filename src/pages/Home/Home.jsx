import NavigationBar from "../../components/NavigationBar/NavigationBar"
import "./home.css"
import heroBanner from "../../assets/hero_banner.jpg"
import heroTittle from "../../assets/hero_title.png"
import  PlayIcon from "../../assets/play_icon.png"
import InfoIcon from "../../assets/info_icon.png"
import TittleCards from "../../components/titleCards/TittleCards"
import Footer from "../../components/Footer/Footer"


function Home(){

    return(
        <div className="home">
            <NavigationBar />
            <div className="hero">
                <img src={heroBanner} alt="hero image" className="banner-image" />
                <div className="hero-texts">
                    <img src={heroTittle} alt="hero tittle" className="hero-text-img"/>
                    <p>Discovring his ties to a secret acncient ord, a young man iving in modern living in Istanvul embarks on a quest to save the city from an immortal enemy</p>
                    <div className="hero-btns">
                        <button className="btn"><img src={PlayIcon} alt="play icon" /> Play</button>
                        <button className="btn dark-btn"><img src={InfoIcon} alt="info icon" />More Info</button>
                    </div>
                    <TittleCards tittle="Trending Movies"/>
                </div>
            </div>
            <div className="more-cards">
                <TittleCards tittle={"Blockbuster Movies"} category={"top_rated"}/>
                <TittleCards tittle={"Only on FasonFilms"} category={"popular"}/>
                <TittleCards tittle={"Upcoming"} category={"upcoming"}/>
                <TittleCards tittle={"Top pics for you"} category={"now_playing"}/>
            </div>

            <Footer />
        </div>
    )
}

export default Home