import React from "react";
import CalendarConnector from "./Connectors/CalendarConnector";


export default class AppWrap extends React.Component {
    render() {
        return (
            <div>
                <CalendarConnector />
                </div>
        )
    }
}