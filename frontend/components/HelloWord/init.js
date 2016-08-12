/**
 * Created by noonon on 7/20/16.
 */


module.exports = function(React,actions, connect){
    require('./style/index.styl');

    class helloWord extends React.Component {

        render() {
            return <div className="hello-world">
                <div className="hello-world__item">
                    <div className="hello-world__item-title">Hello Word</div>
                </div>
            </div>
        }
    }

    return  connect(
        /*            state => ({ number: state.count.number }),
         { increase, decrease }*/
    )(helloWord)
};
