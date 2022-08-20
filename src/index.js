import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import {PostFeedContainer} from './components/Posts';
import Posts from './data/posts.json';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    <PostFeedContainer posts={this.props.posts} />
                </div>
            </div>
        );
    }
}

let app = document.getElementById('app');

ReactDOM.render(<App posts={Posts} />, app);