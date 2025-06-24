import React, { useState, useEffect } from "react";
import axios from "axios";
import GifCard from "./GifCard";

const GIPHY_API_KEY = "waCEMeSVPCLuvTwL8g1TriNMRxQBvb1h";

const SearchField = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchGifs = async () => {
      if (!query) {
        setGifs([]);
        return;
      }
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(query)}&api_key=${GIPHY_API_KEY}&limit=5`
      );
      setGifs(response.data.data);
    };

    fetchGifs();
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <label>
        Search Gifs:
        <input
          placeholder="Search..."
          value={query}
          onChange={handleInput}
          style={{
            color: "black",
          }}
        />
      </label>

      <div style={{ marginTop: "20px" }}>
        {gifs.map((gif) => {
            return(
                  <GifCard key={gif.id} gif={gif} />
            );
        })}
      </div>
    </div>
  );
};

export default SearchField;