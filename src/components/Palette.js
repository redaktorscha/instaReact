import React, { Component } from 'react';
import InstaService from '../services/InstaService';
import ErrorMessage from './Error';
import Spinner from './Spinner';

//user palette with pics
export default class Palette extends Component {

    constructor () {
        super();
        this.InstaService = new InstaService();
        this.state = {        
            error: false,
            loading: true,
            photos: [],       
        };
    }   

    componentDidMount() {
        this.updatePhotos();
    }
    

//getting photos from server
    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);        
    }
   

    onError = (err) => {
        this.setState(() => {
            return {error: true}
            })
            console.log(err);
    }

//loading photos to state
    onPhotosLoaded = (photos) => {
        this.setState({
            photos: photos,
            error: false,
            loading: false,
        })
    }

    //render method for photos
    renderItems(arr) {
        return arr.map(item => {
            const {src, alt} = item;
            return (
                <img src={src} alt={alt}></img>
            )
        })
    }

    render() {
        const {error, photos, loading} = this.state;
        const items = this.renderItems(photos);

        return(
            <div className='palette'>
                {error ? <ErrorMessage /> : loading ? <Spinner/> : items}
            </div>

        )
    }
    
}