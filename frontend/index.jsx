/**
 * Created by noonon on 6/12/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
    render() {
        return <h1>Hello</h1>
    }
});

ReactDOM.render(<Hello/>, document.querySelector('.container'));
