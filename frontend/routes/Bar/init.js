
module.exports = function(React,actions, connect, components){

    var HelloWords = components.HelloWord;


    class Bar extends React.Component {
        render() {

            return (
                <div>
                    <h2>Bar</h2>
                    <HelloWords />
                </div>
            )
        }
    }

    return connect(
        /*            state => ({ number: state.count.number }),
         { increase, decrease }*/
    )(Bar);
};