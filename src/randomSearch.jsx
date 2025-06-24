import React,{useState, useEffect} from "react";
import axios from "axios";
import GifCard from "./GifCard";

const GIPHY_API_KEY = "waCEMeSVPCLuvTwL8g1TriNMRxQBvb1h";
const randomSearch = `http://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`;


const RandomGif = () => {
    const [gif, setGif] = useState(null);

    const fetchGif = async ()=> {
        const gifResponse = await axios.get(randomSearch);
        const gifData = gifResponse.data;
        setGif(gifData.data);
    };
    useEffect(() => {
        fetchGif();
    }, []);

  return (
    <div>
      <h2>Random Gif</h2>
      <button onClick={fetchGif}>Generate Random Gif</button>
      <div style={{ marginTop: "20px" }}>
        {gif ? <GifCard key={gif.id} gif={gif} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default RandomGif;