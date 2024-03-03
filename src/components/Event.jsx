// Event.jsx
import React from "react";

const Event = ({ title, description, src, link }) => {
  return (
    <div className="Event">
      <img src={src} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}><button> Go to Details</button></a>
    </div>
  );
};

export default Event;
