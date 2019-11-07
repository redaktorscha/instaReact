
//fetching data from server (async)
export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3001';
    }

    //receive data
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    //get all posts from server
    getAllPosts = async () => {
        return await this.getResource('/posts/');
    }

//data for right column
    getUsers = async () => {
        return await this.getResource('/users/');        
    }

//pics for palette
    getAllPhotos = async () => {
       const res = await this.getResource('/posts/');
       return res.map(this._filterPosts);
    }

    _filterPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
        };            
    }
}