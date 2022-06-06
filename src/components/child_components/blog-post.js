import React from "react";

export default function BlogPost(props) {

    // function toJsx() {
    // }

    const { title, artist, genre, review } = props.post;

    return (
        <div className="blog-post-wrapper">
            <div className="blog-post">
                <div className="attribute">
                    <h4>Song:</h4>
                    {title}
                </div>
                
                <div className="attribute">
                    <h4>Artist:</h4> 
                    {artist}
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
        </div>
    )
}