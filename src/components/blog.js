import React, { Component }  from 'react';
import axios from 'axios';

export default class BlogContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.blogItems.bind(this)
    }

    // getBlogEntry() {
    //     axios.get("")
    // }

    // getBlogItems() {
    //     axios.get("")
    // }

    render() {
        return (
            <div className="blog-entry">
                {/* {getBlogEntry} */}
            </div>
        )
    }
}