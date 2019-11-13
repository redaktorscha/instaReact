
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
        
        //const result = await res.json();
        //const {posts, users} = result;        
        return await res.json();
    }

    //get all posts from server
    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        const {posts} = res;
        return await posts;
    }

//data for right column
    getUsers = async () => {
        const res = await this.getResource('/users/');
        const {users} = res;
        return users;
    }

//pics for palette
    getAllPhotos = async () => {
       const res = await this.getResource('/posts/');
       const {posts} = res;
       return posts.map(this._filterPosts);
    }

    _filterPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
        };            
    }
}