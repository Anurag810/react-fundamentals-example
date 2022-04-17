import React from "react";

const Hello = () => {
    return React.createElement(
        'div',
        {className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Vishwas')
    )
}

export default Hello