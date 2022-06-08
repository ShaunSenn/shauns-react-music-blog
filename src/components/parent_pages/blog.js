import React, { Component }  from 'react';
import axios from 'axios';

import BlogPost from '../child_components/blog-post';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
                data: [],
                loading: true
        };
    }

    getBlogPosts() {
        axios.get('https://shauns-sqlite-music-blog.herokuapp.com/blogs')
        .then(response => {
            console.log("Response Successful", response); // Keep for testing; in case an api issue comes up.
            this.setState({
                data: response.data,
                loading: false
            })
        })
        .catch(error => {
            // handle error
            console.log("We're encountering a problem", error);
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
                    post={post}
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
                    <div className="loading">We're on the way with the blogs!</div>
                </div>
            )
        } else if (this.state.error) {
            return (
                <div>
                    <div className="error">Oh darn, looks like there was an error. Sorry about that!</div>
                </div>
            )
        } else {
            return (
                <div className='blog-page'>
                    {this.blogPosts()}
                </div>
            )
        }
    }
}