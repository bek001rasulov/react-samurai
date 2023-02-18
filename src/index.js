import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Hello, my friend', likesCount: 4},
];

let dialogsData = [
    {id: 1, name: "Bek"},
    {id: 2, name: "John"},
    {id: 3, name: "Steve"},
    {id: 4, name: "Mike"},
    {id: 5, name: "Mario"},
];

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello"},
    {id: 3, message: "Salom"},
    {id: 4, message: "Welcome"},
    {id: 5, message: "Apple"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>);
