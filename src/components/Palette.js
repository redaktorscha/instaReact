import React, { Component } from 'react';
import InstaService from '../services/InstaService';
import ErrorMessage from './Error';

//user palette with pics
export default class Palette extends Component {

    constructor () {
        super();
        this.InstaService = new InstaService();
        this.state = {        
            error: false,
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
            error: false,
            photos: photos,
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
        const {error, photos} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(photos);

        return(
            <div className='palette'>
                {items}
            </div>

        )
    }
    
}