import React,{useEffect,useState} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import {API_KEY, imageUrl } from '../../constatnts/constants'
import axios from 'axios'

function RowPost(props) {
    const[movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        console.log(response.data.results);
        setMovies(response.data.results)
      })
    }, [])
    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
    const handleMovie=(id)=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        if(res.data.results.length!==0){
            setUrlId(res.data.results[0])
        }else{
            console.log('Trailer not available');
        }
        })
    }
  return (
    
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {
                movies.map((obj)=>
                    <img onClick={()=>{
                        handleMovie(obj.id)
                    }} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
                )
            }
           
        </div>
      {urlId &&  <Youtube  videoId="{urlId.key}" opts={opts} />}
    </div>
  )
}

export default RowPost