import React from "react";
import { useParams } from "react-router-dom";
import Posts from '../data/posts.json';
import Header from "../components/Header";

export default function ViewPost() {
    let params = useParams();
    let post = Posts.find(
        (postData) => parseInt(params.id) === postData['id']
    );

    return (
        <div>
            <Header />
            <div className="post-container">
                <h2>Reading {post['title']}</h2>
                <p>{post['content']}</p>
            </div>
        </div>
    )
}
