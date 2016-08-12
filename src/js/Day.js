import React from "react";
import Layout from "./Layout"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Day extends React.Component {
    constructor() {
        super();
    }

    render() {
        var krzysztof;

        if(this.props.condition == this.props.day) {
            krzysztof = "uolo";
        } else {
            krzysztof = "uolohidden";
        }

        return (<div>
            <div className={krzysztof}>
                <ReactCSSTransitionGroup transitionName="showDay" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                    <Layout {...this.props}/>
                </ReactCSSTransitionGroup>
            </div>
            </div>
        )
    }
}
