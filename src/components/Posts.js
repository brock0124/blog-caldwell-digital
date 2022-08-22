import React from "react";
import {Link} from "react-router-dom";

let postContainerStyles = {
    maxWidth:"672px",
    margin:"0 auto 50px"
};

class SinglePostContainer extends React.Component {
    render() {
        let post = this.props.post;

        return (
            <div className="post-container">
                <h2>{post['title']}</h2>
                <p>{post['content']}</p>
            </div>
        )
    }
}

class PostFeedContainer extends React.Component {
    render() {
        let posts = this.props.posts.map((post) => {
            return (
                <Post post={post} ></Post>
            )
        });

        return (
            <div style={postContainerStyles}>
                {posts}
            </div>
        )
    }
}

class Post extends React.Component {
    render() {
        let post = this.props.post;

        return (
            <div className="post">
                <div className="post-data">
                    <h3 className="post-title">{post['title']}</h3>
                    <p className="post-content">{post['content']}</p>
                    <div className="post-meta_container">
                        <span><strong>likes</strong> {post['meta']['likes']}</span>
                        <span><strong>comments</strong> {post['meta']['comments']}</span>
                        <span><strong>shares</strong> {post['meta']['shares']}</span>
                    </div>
                </div>
                <ReadButton id={post['id']}></ReadButton>
            </div>
        )
    }
}

class ReadButton extends React.Component {
    render() {
        const styles = {
            width: '100%',
            backgroundColor: 'cornflowerblue',
            display: 'inline-block',
            padding: '15px',
            textAlign: 'center',
            fontSize: '20px',
            color: '#fff',
            borderRadius: '0 0 10px 10px',
        }

        return <Link style={styles} to={"post/"+this.props.id}>Read Post</Link>
        //return <a href={this.props.link}><div style={styles}>Read</div></a>
    }
}

export {PostFeedContainer, Post, SinglePostContainer};
