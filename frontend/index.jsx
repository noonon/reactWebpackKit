/**
 * Created by noonon on 6/12/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import HelloComponent from 'components/helloWord/index.jsx';

require('style/init.styl');

var Hello = new HelloComponent(React);

ReactDOM.render(<Hello/>, document.querySelector('.container'));
