import React from 'react';
import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className="postsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className="posts">
                <Post message="hi man"/>
            </div>
        </div>
    );
};

export default MyPosts;