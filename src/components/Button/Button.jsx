import React from "react";
import { Link } from "react-router-dom";
import "./button.scss"
const Button = ({ className, src, text, path }) => {
  return (
    <Link to={path} className={`btn ${className}`}>
      <img src={src} alt="" />
      <span>{text}</span>
    </Link>
  );
};

export default Button;
