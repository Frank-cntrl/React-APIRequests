import React, {useState} from "react";

const SearchField = () => {

  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    console.log(value);
  }

  return (
  <div>
    <input 
    type = "text"
    placeholder="Search.."
    value = {query}
    onChange = {handleInput}
    style = {{
      color: "Black"
    }}
    />
  </div>
)};

export default SearchField;
