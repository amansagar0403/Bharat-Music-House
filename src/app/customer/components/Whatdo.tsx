import React from "react";
import "./styles.css"; // Import the CSS file

type WhatdoProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const Whatdo: React.FC<WhatdoProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="Container">
      <div className="TextContainer">
        <h1 className="Title">{title}</h1>
        <p className="Description">{description}</p>
      </div>
      <img className="Image" src={imageSrc} />
    </div>
  );
};

export default Whatdo;
