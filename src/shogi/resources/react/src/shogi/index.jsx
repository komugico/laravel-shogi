import React from 'react';
import ReactDOM from 'react-dom';

class Shogi extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <h1> Shogi Application Main Page </h1>
        );
    }
}

ReactDOM.render(
    <Shogi />,
    document.getElementById("shogi")
);