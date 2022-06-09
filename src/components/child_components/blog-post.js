import React, { useEffect } from "react";

import '../../style/blog_styles/blog-post.scss';

export default function BlogPost(props) {

    useEffect(() => {
        document.title = "Blog Page"
    })

    const { title, artist, genre, review } = props.post;

    return (
        <div className="blog-post-wrapper">
            <div className="blog-post">
                <div className="attribute">
                    <h4>Song:</h4>
                    <p>{title}</p>
                </div>
                <div className="attribute">
                    <h4>Artist:</h4> 
                    <p>{artist}</p> 
                </div>
                <div className="attribute">
                    <h4>Genre:</h4> 
                    <p>{genre}</p>
                </div>
                <div className="attribute">
                    <h4>Review:</h4> 
                    <p>{review}</p>
                </div> 
            </div>
        </div>
    )
}