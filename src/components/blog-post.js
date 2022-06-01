import React from "react";

export default function BlogPost(props) {
    return (
        <div>
            <div>
                <h4>Song Name:</h4> 
                {props.title}
            </div>
            
            <div>
                <h4>Artist:</h4> 
                {props.artist}
            </div>

            <div>
                <h4>Genre:</h4>
                {props.genre}
            </div>
            
            <div>
                <h4>Review</h4>
                {props.content}
            </div>
        </div>
    )
}