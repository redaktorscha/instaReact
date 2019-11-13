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
           height={200}
           width={200}
           timeout={3000}  
        />
       );
      }
   }

