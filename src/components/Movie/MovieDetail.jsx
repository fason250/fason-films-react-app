import "./movieDetail.css"
import TittleCards from "../titleCards/TittleCards"
import { useEffect, useState } from "react"
import { options } from "../../data"

import logoPlaceholder from "../../assets/logo-placeholder-image.png"


function MovieDetail({videoId}) {
    const [movieDetail,setMovieDetail] = useState({})

    async function fetchingData(){
        try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${videoId}?language=en-US`, options)
        const data = await response.json()
        if(data){
            setMovieDetail(data)
        }
        }catch(err){
            console.log(err)
        }
    }

useEffect(()=>{
    fetchingData()
},[videoId])



function productionCompaniesElement(){
    if(movieDetail?.production_companies){
        const companies = movieDetail.production_companies.map((country)=>(
        <>
        <img width="40px" height="40px" src={country?.logo_path ? `https://image.tmdb.org/t/p/w500${country?.logo_path}` : logoPlaceholder} alt={country?.name} />
        <p>{country?.name}</p>
        </>
    ))
    return companies

    }
}

function genreesElement(){
    if(movieDetail?.genres){
        const genrees = movieDetail.genres.map((genre)=>(
            <p key={genre.id}>{genre.name}</p>
        ))
        return genrees
    }
    
}


  return (
    <>
        <div className="movieInfo">
            <div className="movie-thumbnail">
                <img src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`} alt="movie thumbnail" />
            </div>
            <div className="movie-details">
                <div className="name">
                    <h2>{movieDetail?.title}</h2>
                    <p>Rating: <span>{Math.round((movieDetail?.vote_average * 10) / 10)}</span></p>
                </div>
                <p className="description">{movieDetail?.overview}</p>
                <div className="genres">
                   { genreesElement() }
                </div> 
                <div className="production-company">
                    { productionCompaniesElement() }
                    
                </div>
                <div className="release-date">
                    <p>Release Date: <span>{movieDetail?.release_date}</span></p>
                    {movieDetail?.budget > 0 ? <p>Budget <span>{movieDetail?.budget}$</span></p> : <p>Popularity <span>{movieDetail?.popularity}</span></p> }
                    <p>Vote Count <span>{movieDetail?.vote_count}</span></p>
                </div>
            </div>

        </div>
    <div className="related-movies">
        <TittleCards tittle={"Related Movies"} />
    </div>

    </>
    
  )
}

export default MovieDetail