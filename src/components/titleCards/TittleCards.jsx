/* eslint-disable react/prop-types */
import { useRef ,useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { options } from "../../data.js"
import "./tittleCards.css"



function TittleCards({ tittle, category }) {
  const [movies , setMovies ] = useState([])

  const cardRef = useRef(null)

 

  
  async function fetchingData(){
    try{
      const randomPage = Math.ceil(Math.random() * 10)
      const response = await fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=${randomPage}`, options);
      const data = await response.json()
      if(data){
        const bestMovies = data?.results.filter(movie => movie.backdrop_path !== null)
        setMovies(bestMovies)
      }
    }catch(err){
      console.log(err)
    }
  }

useEffect(()=>{

  fetchingData()
  cardRef.current.addEventListener("wheel",handleWheel)

  },[])

  function handleWheel(event){
    event.preventDefault()
    cardRef.current.scrollLeft += event.deltaY

  }

  function handleScrollLeft(){

    if(cardRef.current){
      cardRef.current.scrollBy({ left: -230, behavior: "smooth"})
    }
  }
  
  function handleScrollRight(){
    if(cardRef.current){
      cardRef.current.scrollBy({ left: 230, behavior: "smooth" })
    }
  }

  

  const cardElement = movies.map((movie)=>{
    const name = movie?.original_title
    const thumbnail = movie?.backdrop_path

    return(
      <Link to={`/player/${movie?.id}`} className="card" key={movie?.id}>
        <img src={`https://image.tmdb.org/t/p/w500${thumbnail}`} alt={`${name} image`} />
        <p style={ name.length > 13 ? {fontSize: "15px"} : null }>{name.length > 17 ? name.slice(0,17): name }</p>
      </Link>
      
    )
  })

  return (
    <div className="tittle-cards">
      <div className="tittle">
          <h2>{tittle ? tittle : "Popular movies on FasonFilms" }</h2>
          <div className="navBtns">
            <button onClick={handleScrollLeft}>&lt;</button>
            <button onClick={handleScrollRight}>&gt;</button>
          </div>
      </div>
        <div className="card-list" ref={cardRef}>
          {cardElement}
        </div>
    </div>
  )
}

export default TittleCards