import React from "react";

export default function BlogPost(props) {

    // function toJsx() {
    // }

    const { title, artist, genre, review } = props.post;

    return (
        <div className="blog-post-wrapper">

            <div className="blog-post">
                 
                <div className="attribute">
                    <h4 style={{width: "55px", marginRight: "15px"}}>Song:</h4> 
                    <p>{title}</p> 
                </div>
                
                <div className="attribute">
                    <h4 style={{width: "55px", marginRight: "15px"}}>Artist:</h4> 
                    <p>{artist}</p> 
                </div>

                <div className="attribute">
                    <h4 style={{width: "55px", marginRight: "15px"}}>Genre:</h4> 
                    <p>{genre}</p>
                </div>
                
                <div className="attribute">
                    <h4 style={{width: "55px", marginRight: "15px"}}>Review:</h4> 
                    <p>{review}</p>
                </div> 
            </div>
        </div>
    )
}