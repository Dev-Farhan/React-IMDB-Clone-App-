import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "./Home.css";
import MovieList from '../../components/movieList/MovieList';

function Home() {
   const [popularMovies,setPopularMovies] = useState([]);
   //  useEffect=(()=>{
   //     fetch("https://api.themoviedb.org/3/movie/550?api_key=c2fc8087806d31aebb475f284763ca31&language=en-US")
   //     .then(res=>res.json())
   //     .then(data=>console.log(data))
   //  },[]);
   const url = 'https://api.themoviedb.org/3/movie/popular?api_key=c2fc8087806d31aebb475f284763ca31&language=en-US&page=1';
   
   useEffect(()=>{
      fetch(url)
        .then(res => res.json())
        .then(json => setPopularMovies(json.results))
        .catch(err => console.error('error:' + err));
   },[])
    return ( 
        <>
       <div className="poster">
         <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          
         >
            {
               popularMovies.map(movie =>{
               
                return (<>
                 <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} />
                   <div className="posterImage">
                     <img alt="imageLogo" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                   </div>
                   <div className="posterImage__overlay">
                        <div className="posterImage__title">{movie?movie.original_title:""}</div>
                        <div className="posterImage__runtime">
                           {movie?movie.release_date:""}
                           <span className="posterImage__rating">
                              {movie? movie.vote_average:""}
                              <i className="fas fa-star"/>{" "}
                           </span>
                        </div>
                        <div className="posterImage__description">
                           {movie?movie.overview:""}
                           </div>
                   </div> 
                   </>) 
               })
            }
         </Carousel>
         <MovieList/>
       </div>
        </>
     );
}

export default Home;