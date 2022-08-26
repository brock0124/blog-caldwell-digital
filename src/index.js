import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import {PostFeedContainer} from './components/Posts';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {ViewPostFactory} from "./routes/post";
import {Alert, Container, SpeedDial, SpeedDialIcon} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

class App extends React.Component {
    render() {
        return (
            <div style={{height: "100vh"}}>
                <Header />
                <Container>
                    <div className="content">
                        <PostFeedContainer  />
                    </div>
                </Container>

                <div style={{position: "relative"}}>
                    <SpeedDial
                        onClick={() => {
                            window.open(
                                "http://blog-data.caldwell.digital:1337",
                                "_blank"
                            )
                        }}
                        ariaLabel="Create new post"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                        title="Add a new post"
                    ></SpeedDial>
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
            <Route path="/" element={<App />} />
            <Route path="post/:id" element={<ViewPostFactory />} />
        </Routes>
    </BrowserRouter>
);