import React from "react";

export default function BlogPost(props) {

    const { id, title, musician, genre, review } = props.post;

    return (
        <div className="blog-post">
            <div className="attribute">
                <h4>Song Name:</h4>
                {title} 
            </div>
            
            <div className="attribute">
                <h4>Artist:</h4> 
                {musician}
            </div>

            <div className="attribute">
                <h4>Genre:</h4>
                {genre}
            </div>
            
            <div className="attribute">
                <h4>Review:</h4>
                {review}
            </div>
        </div>
    )
}