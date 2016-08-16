import React from "react";
import Day from "./Day"
import Header from "./Header";


export default class AppWrap extends React.Component {

    constructor() {
        super();
        this.state = {selectedDayIndex: 0};
        this.week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    }


    setSelectedDay(index) {
        this.setState({selectedDayIndex: index});
    }

    render() {
        return (
            <div className="calendar">
                <Header selectedDayIndex={this.state.selectedDayIndex} setSelectedDay={this.setSelectedDay.bind(this)} Week={this.week}/>
                <Day day={this.week[this.state.selectedDayIndex]} condition={this.week[this.state.selectedDayIndex]}/>
            </div>
        )
    }
}