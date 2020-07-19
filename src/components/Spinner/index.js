import React from 'react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => (
  <Loader
    type="ThreeDots"
    color="#d8b192"
    height={200}
    width={200}
    // timeout={3000} 
  />
);

export default Spinner;