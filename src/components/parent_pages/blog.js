import React, { Component, useState }  from 'react';
import axios from 'axios';

import BlogPost from '../child_components/blog-post';

export default class Blog extends Component {
    constructor(props) {
        super();
        
        this.state = { //The initial state is going to be an empty array, I setState with the data brought in by the api call, then I map over the data
                data: [
                    // {id: 1, title: "White Walls", musician: "Between The Buried and Me", genre: "Metal", review:"needs a review", clip:"iframe"}, 
                    // {id: 2, title: "Last Living Souls", musician: "Gorillaz", genre: "Alternative- Multi Genre", review:"needs a review", clip:"iframe"}, 
                    // {id: 3, title: "Digital Veil", musician: "The Human Abstract", genre: "Metal", review:"needs a review", clip:"iframe"}
                ]
        };
    }

    getBlogPosts() {
        axios
        .fetch('https://sbs-music-blog-sqlite-api.herokuapp.com/blogs')
        .then(response => {
            // handle success
            console.log("Response Successful", response);
            this.setState({
                data: response //blog_posts data collection needs to be created on the backend for this to return anything
            })
        })
        .catch(error => {
            // handle error
            console.log("Sorry, we encountered a problem", error);
        })
        .then(function () {
            // always executed
        });
    }

    blogPosts() {
        return this.state.data.map(post => {
            return (
                <BlogPost 
                    key={post.id}
                    post={post} //as a best practice this line does the same thing as the next 4 lines below
                    // title={post.title} 
                    // artist={post.musician} 
                    // genre={post.genre} 
                    // content={post.review}
                /> 
            )
        })
    }

    componentDidMount() {
        this.getBlogPosts();
    }


    render() {
        
        return (
            <div>
                 <h1>Welcome to my Blog page!</h1>
                 {this.blogPosts()}
            </div>
        )
    }
}