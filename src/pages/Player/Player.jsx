import "./player.css"
import { options } from "../../data";
import BackArrowIcon from "../../assets/back_arrow_icon.png"
import { useEffect, useRef, useState } from "react";
import { useParams , Link} from "react-router-dom";
import NoTrailler from "../../components/NoTrailler";
import MovieDetail from "../../components/Movie/MovieDetail";


function Player() {
  const [trailler,setTrailler]= useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })
  const  focus = useRef(null)
  const [isTraillerAvailable,setIsTraillerAvailable] = useState(true)
  const { videoId } = useParams()
  const publishedDate = new Date(trailler?.published_at).toUTCString()



  async function fetchingTrailler(){
    try{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${videoId}/videos?language=en-US`, options);
      const result = await response.json()
      setTrailler(result?.results[0])
      if(result?.results.length <= 0){
        setIsTraillerAvailable(false)
      }else{
        setIsTraillerAvailable(true)
      }
    }catch(err){
      console.log(err)
    }
  }  
  if(focus.current){
          focus.current.scrollIntoView()
      }

  useEffect(()=>{
    fetchingTrailler() 
    
  

  },[videoId])


  return (
    <div className="player" ref={focus} >
        <Link to={"/"}><img src={BackArrowIcon}  className="back-arrow-icon" alt="back arrow icon" /></Link>
       { isTraillerAvailable ?<> <iframe 
        src={`https://www.youtube.com/embed/${trailler?.key}`} 
        width="90%" 
        height="90%" 
        title="trailer" 
        frameBorder="0" 
        allowFullScreen></iframe>
        <div className="player-info">
          <p>Published on {publishedDate}</p>
          <p>{trailler?.name.replace(/"/g,'')}</p>
          <p>{trailler?.type}</p>
        </div></> : <NoTrailler />}
      <MovieDetail videoId={videoId}/>
    </div>
  )
}

export default Player