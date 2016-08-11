/**
 * Created by noonon on 7/20/16.
 */

import React, { Component } from 'react'

require('./style/index.styl');

class helloWord extends Component {

    render() {
        return <div className="hello-world">
            <div className="hello-world__item">
                <div className="hello-world__item-title">Hello Word</div>
            </div>
        </div>
    }
}

module.exports = helloWord;