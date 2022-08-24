import React from "react";
import { useParams } from "react-router-dom";
import { Config as data } from "../data/wordpress";
import Header from "../components/Header";
import { marked } from "marked"

export const ViewPostFactory = props => {
    let params = useParams();

    return (<ViewPost post_id={params.id} />)
}

class ViewPost extends React.Component {
    componentDidMount() {
        fetch(data.baseUrl + data.get.post + this.props.post_id)
            .then(response => response.json())
            .then(postData => {
                this.setState(
                    {
                        post: {
                            'id': postData.id,
                            'title': postData.Title,
                            'content': marked(postData.Content),
                            'meta': {
                                'likes': 150,
                                'comments': 272,
                                'shares': 73
                            }
                        }
                    }
                );
            });
    }

    render() {
         if (this.state) {
            return (
                <div>
                    <Header />
                    <div className="post-container">
                        <h2>{this.state.post['title']}</h2>
                        <p dangerouslySetInnerHTML={{__html: this.state.post['content']}}></p>
                    </div>
                </div>
            )
         }
    }
}

export default ViewPost
