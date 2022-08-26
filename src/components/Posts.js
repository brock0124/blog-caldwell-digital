import React from "react";
import { Link } from "react-router-dom";
import { marked } from "marked";
import { Config as data} from "../data/wordpress";
import {Alert, Card, CardActions, CardContent, Chip, Typography} from "@mui/material";

let postContainerStyles = {
    maxWidth:"672px",
    margin:"0 auto 50px"
};

class PostFeedContainer extends React.Component {
    componentDidMount() {
        //fetch(data.baseUrl + data.get.posts + '?per_page=100')
        fetch('http://blog-data.caldwell.digital:1337/posts')
            .then(response => response.json())
            .then(posts => {
                posts = posts.map(postData => {
                    console.log(postData);
                    return {
                        'id': postData.id,
                        'title': postData.Title,
                        'content': marked.parse(postData.Content),
                        'published_at': postData.published_at,
                        'meta': {
                            'likes': 150,
                            'comments': 272,
                            'shares': 73
                        }
                    }
                });
                this.setState({posts: posts})
            });
    }

    render() {
        let posts;

        if (this.state) {
            posts = this.state.posts.map((post, id) => {
                return (
                    <Post post={post}  key={id}></Post>
                )
            });

            return (
                <div style={postContainerStyles}>
                    {posts.reverse()}
                </div>
            )
        }
    }
}

class Post extends React.Component {
    render() {
        let post = this.props.post;

        return (
            <Card elevation={2} sx={{marginBottom: '2rem'}}>
                <CardContent >
                    <div style={{marginBottom: '3.5rem'}}>
                        <Typography sx={{float:"left"}} variant="h2">{post['title']}</Typography>
                        <Chip sx={{float:"right"}} label={new Date(post['published_at']).toDateString()}></Chip>
                    </div>

                    <p
                        className="post-content"
                        dangerouslySetInnerHTML={{__html: post['content']}}
                    ></p>
                    <div className="post-meta_container">
                        <span><strong>likes</strong> {post['meta']['likes']}</span>
                        <span><strong>comments</strong> {post['meta']['comments']}</span>
                        <span><strong>shares</strong> {post['meta']['shares']}</span>
                    </div>
                </CardContent>
                <ReadButton id={post['id']} />
            </Card>
        )
    }
}

class ReadButton extends React.Component {
    render() {
        const styles = {
            width: '100%',
            display: 'inline-block',
            padding: '15px',
            textAlign: 'center',
            fontSize: '20px',
            color: '#fff',
            borderRadius: '0 0 4px 4px',
        }

        return <Link style={styles} className="blue-back" to={"post/"+this.props.id}>Read Post</Link>
    }
}

export {PostFeedContainer, Post};
