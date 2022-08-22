import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import {PostFeedContainer} from './components/Posts';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Posts from './data/posts.json';
import ViewPost from "./routes/post";

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

let app = ReactDOM.createRoot(
    document.getElementById('app')
);

app.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App posts={Posts} />} />
            <Route path="post/:id" element={<ViewPost />} />
        </Routes>
    </BrowserRouter>
);