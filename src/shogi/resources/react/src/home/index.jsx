import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h1> Shogi Application Home </h1>
        );
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById("home")
);