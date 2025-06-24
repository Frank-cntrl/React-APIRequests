import React from "react";

const GifCard = ({ gif }) => {
  return (
    <div className="gif-card" style={styles.card}>
      <img
        src={gif.images.fixed_height.url}
        alt={gif.title}
        style={styles.image}
      />
      <h4 style={styles.title}>{gif.title || "Untitled GIF"}</h4>
      <p style={styles.rating}>Rating: {gif.rating?.toUpperCase()}</p>
      <a
        href={gif.url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        View on GIPHY
      </a>
    </div>
  );
};
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "12px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  title: {
    margin: "8px 0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  rating: {
    margin: "4px 0",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    display: "inline-block",
    marginTop: "8px",
    fontSize: "14px",
    color: "#007bff",
    textDecoration: "none",
  },
};
export default GifCard;