import React, { Component, useState} from "react";

export default function BlogPost(props) {
    return (
        <div>
            <h4>Blog Posts</h4>
            <div>{props.title}</div>
            <div>{props.review}</div>
        </div>
    )
}