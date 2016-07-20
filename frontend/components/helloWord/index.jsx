/**
 * Created by noonon on 7/20/16.
 */

export default class helloWord {
    constructor(React) {

        require('./style/index.styl');

        return React.createClass({
            render() {
                return <div className="hello-world">
                    <div className = "hello-world__item">
                        <div className = "hello-world__item-title" >Hello Word</div>
                    </div>
                </div>
            }
        });
    }
};