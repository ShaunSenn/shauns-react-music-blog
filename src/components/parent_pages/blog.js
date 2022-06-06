import React, { Component, useState }  from 'react';
import axios from 'axios';

import BlogPost from '../child_components/blog-post';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        
        this.state = { //The initial state is going to be an empty array, I setState with the data brought in by the api call, then I map over the data
                data: [],
                loading: true
        };
    }

    getBlogPosts() {
        axios.get('https://shauns-sqlite-music-blog.herokuapp.com/blogs')
        .then(response => {
            // handle success
            console.log("Response Successful", response);
            this.setState({
                data: response.data,
                loading: false
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
                    // artist={post.artist} 
                    // genre={post.genre} 
                    // review={post.review}
                /> 
            )
        })
    }

    componentDidMount() {
        this.getBlogPosts();
    }



    render() {
        if (this.state.loading) {
            return (
                <div>
                    <div className="loading">Loading...</div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div>
                    <div className="error">An error occured... Please try again later.</div>
                </div>
            )
        }

        else {
            return (
                <div className='blog-page'>
                    {this.blogPosts()}
                </div>
            )
        }
    }
    // render() {
        
    //     return (
    //         <div>
                
    //              <h1>Welcome to my Blog page!</h1>
    //              {this.blogPosts()}
    //         </div>
    //     )
    // }
}