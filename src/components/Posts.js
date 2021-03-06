import React, { Component } from 'react';
//import Post from './Post';
import InstaService from '../services/InstaService';
import User from './User';
import ErrorMessage from './Error';

//component: posts block(left)
export default class Posts extends Component {
    instaService = new InstaService();
    state = {
        posts: [],
        error: false,
        liked: false,
    }

    //receive data from server and update posts array
    updatePosts() {
        this.instaService.getAllPosts()
        .then(this.onPostsLoaded) //data inside
        .catch(this.onError);
    }

//if successfully
    onPostsLoaded = (posts) => {
        this.setState({
            posts, //===posts: posts,
            error: false,
        });
        //console.log(this.state.posts);
    }

//if not
    onError = (err) => {
        this.setState({
            error: true,
        });
        console.log(err);
    }

    handleLike = (event) => {
        this.setState({
            liked: !this.state.liked,
            chosenSpan: event.target.id,
        });
        //console.log(event.target.id);
    }

    componentDidMount() {
        this.updatePosts();
    }

    renderItems(arr) {
        return arr.map(item => {
            const { name, altname, photo, src, alt, descr, id } = item;
        

            return (
                <div key={id} className='post'>
                    <User
                        min
                        src={photo}
                        alt={altname}
                        name={name}/>                

                    <img src={src} alt={alt}></img>
                    <div className='post__name'>{name}</div>
                    <div className='post__descr'>{descr}</div>
                    <span id={id}
                    className={this.state.liked  && this.state.chosenSpan === id ? 'post__like post__like-liked' : 'post__like post__like-empty'}
                    onClick={this.handleLike}></span>
                </div>
            );
        });

    }

    render() {
        const { error, posts } = this.state;

        const items = this.renderItems(posts);

        return (
            <div className='left'>
                {error ? <ErrorMessage /> : items}
            </div>
        )
    }
    
}