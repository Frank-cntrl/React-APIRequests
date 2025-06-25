import React,{useState, useEffect} from "react";
import axios from "axios";
import GifCard from "./GifCard";

const GIPHY_API_KEY = "waCEMeSVPCLuvTwL8g1TriNMRxQBvb1h";
//const regularSearch = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}api_key=${GIPHY_API_KEY}`;
const trendingSearch = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;
const randomSearch = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`;


const GifList = () => {
    const [gifs, setGifs] = useState([])

    const fetchGifs = async ()=> {
        const gifResponse = await axios.get(trendingSearch);
        const gifData = gifResponse.data;
        setGifs(gifData.data);
    };
    useEffect(() => {
        fetchGifs();
    }, []);
  return (
    <div>
    <h2>Trending Gifs</h2>
    <ul>
        {gifs.map((gif) => {
            return(
                  <GifCard key={gif.id} gif={gif} />
            );
        })}
    </ul>
    </div>
  );
};

export default GifList;


//Regular Search: http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
//Trending Search: http://api.giphy.com/v1/gifs/trending?api_key=YOUR_API_KEY
//Random Search: http://api.giphy.com/v1/gifs/random?api_key=YOUR_API_KEY