import React from "react";
import ReactDOM from "react-dom";
import Userregistration from "./user/useregistration";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <h1>My React and TypeScript App!</h1>
            <Userregistration />
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);