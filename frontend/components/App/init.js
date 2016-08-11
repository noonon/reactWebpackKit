/**
 * Created by noonon on 8/11/16.
 */
import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children }
            </div>
        )
    }
}

module.exports = App;