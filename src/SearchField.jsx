import React, {useState} from "react";

const GIPHY_API_KEY = "waCEMeSVPCLuvTwL8g1TriNMRxQBvb1h";
const searchGif = `http://api.giphy.com/v1/gifs/search?q=${"value"}&api_key=${GIPHY_API_KEY}`;

const SearchField = () => {

  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    console.log(value);
  }

  function searchResults({query}){
    if (query === ""){
      return null;
    }
    
  }

  return (
  <div>
    <label>
    Search Gifs:
    <input 
    placeholder="Search.."
    value = {query}
    onChange = {handleInput}
    style = {{
      color: "Black"
    }}
    />
    </label>
    <searchResults query= {query}/>
  </div>
)};

export default SearchField;
