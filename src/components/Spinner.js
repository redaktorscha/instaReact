import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export default class Spinner extends Component {
      render() {
       return(
        <Loader
           visible
           type="Oval"
           color="#42f5da"
           height={80}
           width={80}
           timeout={2000}  
        />
       );
      }
   }

