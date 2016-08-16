import React from "react";
import Layout from "./Layout"

export default class Day extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
                <div className="day">
                    <Layout {...this.props}/>
                </div>
        )
    }
}
