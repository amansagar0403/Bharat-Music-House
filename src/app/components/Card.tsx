import React from "react";
import "./styles.css"; // Import the CSS file

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="card">
      <img className="Image" src={imageSrc} />
    </div>
  );
};

export default Card;
