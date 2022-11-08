import React from "react";
import "./TrainingStyles.css";

import { Link } from "react-router-dom";

import Pod from "../../assets/pod.jpeg";
import Moon from "../../assets/moon.jpeg";

const TrainingCards = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={Moon} className="img" alt='' />
          </div>
          <div className="image-stack bottom">
            <img src={Pod} className="img" alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingCards;
