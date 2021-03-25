import React from "react";
import "./loader.scss";
import loadIcon from '../../../assets/images/Ripple-1s-200px (1).gif';

const Loader = () => {
  return (
    <div className="loader">
      <img
        src={loadIcon}
        alt="loader"
        className="loader__img"
      />
    </div>
  );
};

export default Loader;