import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/Header';
import {SinglePostContainer} from './components/Posts';
import Posts from './data/posts.json';

class PostView extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <SinglePostContainer post={this.props.post} />
                </div>
            </div>
        );
    }
}

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let post;
Posts.forEach((postData) => {
    if (params.get("id") === postData["id"]) {
        post = postData;
    }
});

let postElement = document.getElementById('post');

ReactDOM.render(<PostView post={post} />, postElement);
