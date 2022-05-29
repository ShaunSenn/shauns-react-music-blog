import React, { Component, useState }  from 'react';
import axios from 'axios';

import BlogPost from './blog-post';

export default class Blog extends Component {
    constructor(props) {
        super();
        
        this.state = {
                title: "",
                review: ""
        }

        this.blogPosts = this.blogPosts.bind(this);
    }

    blogPosts() {
        const data = [["White Walls", "BTBAM"], ["Vela, Together We Await The Storm", "The Human Abstract"], ["Digital Veil", "The Human Abstract"]];

        return data.map(song => {
            return <BlogPost />
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