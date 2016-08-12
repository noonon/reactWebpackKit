/**
 * Created by noonon on 8/11/16.
 */


module.exports = function(React,actions, connect){
    class App extends React.Component {
        render() {
            return (
                <div>
                    {this.props.children }
                </div>
            )
        }
    }

    return connect(
/*            state => ({ number: state.count.number }),
        { increase, decrease }*/
    )(App)
};