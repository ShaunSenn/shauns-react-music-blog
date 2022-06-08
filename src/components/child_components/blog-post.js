import React, { useEffect } from "react";

export default function BlogPost(props) {

    useEffect(() => {
        document.title = "Blog Page"
    })

    const { title, artist, genre, review } = props.post;

    return (
        <div className="blog-post-wrapper">
            <div className="blog-post">
                <div className="attribute">
                    <h4 style={{width: "60px", marginRight: "10px"}}>Song:</h4> 
                    <p>{title}</p>
                </div>
                <div className="attribute">
                    <h4 style={{width: "60px", marginRight: "10px"}}>Artist:</h4> 
                    <p>{artist}</p> 
                </div>
                <div className="attribute">
                    <h4 style={{width: "60px", marginRight: "10px"}}>Genre:</h4> 
                    <p>{genre}</p>
                </div>
                <div className="attribute">
                    <h4 style={{width: "60px", marginRight: "10px"}}>Review:</h4> 
                    <p>{review}</p>
                </div> 
            </div>
        </div>
    )
}