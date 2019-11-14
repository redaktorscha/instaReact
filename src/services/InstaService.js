
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
                
        return await res.json();
    }

    //get all posts from server
    getAllPosts = async () => {
        const {posts} = await this.getResource('/posts/');
        return posts;
    }

//data for right column
    getUsers = async () => {
        const {users} = await this.getResource('/users/');
        return users;
    }

//pics for palette
    getAllPhotos = async () => {
       const {posts} = await this.getResource('/posts/');
       //return posts.map(this._filterPosts);
       return posts.map(({src, alt}) => ({src, alt}));
    }

    // _filterPosts = (post) => {
    //     return {
    //         src: post.src,
    //         alt: post.alt,
    //     };            
    // }
}