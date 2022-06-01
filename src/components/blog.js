import React, { Component, useState }  from 'react';
import axios from 'axios';

import BlogPost from './blog-post';

export default class Blog extends Component {
    constructor(props) {
        super();
        
        this.state = { //The initial state is where I bring in my live data from my API
                data: [
                    {songTitle: "White Walls", musician: "Between The Buried and Me", genre: "Metal", review:"needs a review"}, 
                    {songTitle: "Last Living Souls", musician: "Gorillaz", genre: "Alternative- Multi Genre", review:"needs a review"}, 
                    {songTitle: "Digital Veil", musician: "The Human Abstract", genre: "Metal", review:"needs a review"}
                ]
        };
    }

    blogPosts() {
        return this.state.data.map(post => {
            return <BlogPost title={post.songTitle} artist={post.musician} genre={post.genre} content={post.review}/>
        })
    }




    render() {
        
        return (
            <div>
                {this.blogPosts()}
            </div>
        )
    }
}