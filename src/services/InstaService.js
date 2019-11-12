
//fetching data from server (async)
export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:4000';
    }

    //receive data
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        };

        
        let result = await res.json();
        const {posts} = result;
        console.log(posts.map(this._filterPosts));

        return await res.json();
    }

    //get all posts from server
    getAllPosts = async () => {
        //const res = await this.getResource('/posts/');
        return await this.getResource('/posts/');
        // console.log('getAllPosts', res);
    }

//data for right column
    getUsers = async () => {
        return await this.getResource('/users/');
        // console.log ('getUsers', res);
    }

//pics for palette
    getAllPhotos = async () => {
       const res = await this.getResource('/posts/');
       console.log('getAllPhotos: ', res);
       return res.map(this._filterPosts);
    }

    _filterPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
        };            
    }
}