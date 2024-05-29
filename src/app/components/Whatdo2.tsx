import React from "react";
import "./styles.css"; // Import the CSS file

type WhatdoProps2 = {
  title: string;
  description: string;
  imageSrc: string;
};

const Whatdo2: React.FC<WhatdoProps2> = ({ title, description, imageSrc }) => {
  return (
    <div className="Container2">
      <img className="Image" src={imageSrc} />
      <div className="TextContainer">
        <h1 className="Title">{title}</h1>
        <p className="Description">{description}</p>
      </div>
    </div>
  );
};
export default Whatdo2;
