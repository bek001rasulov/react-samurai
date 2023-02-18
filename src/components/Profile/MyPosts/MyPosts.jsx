import React from 'react';
import './MyPosts.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    // let posts = [
    //     {id: 1, message: 'Hi, how are you?', likesCount: 12},
    //     {id: 2, message: 'Hello, my friend', likesCount: 4},
    // ];
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className="postsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>a</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;