import React from "react";
import Day from "./Day"

var Week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export default class AppWrap extends React.Component {

    constructor() {
        super();
        this.state = {selectedDayIndex: 0}
    }


    setSelectedDay(index) {
        this.setState({selectedDayIndex: index});
    }


    render() {
        var days = Week.map((day) => {
            return(
                <Day day={day} condition={Week[this.state.selectedDayIndex]}/>
            )
        });
        return (
            <div className="calendar">
                <div>{Week.map((day,index)=> <span className={"yourMom " + ((this.state.selectedDayIndex === index)? "selected": "")} onClick={()=> this.setSelectedDay(index)}>{day}</span>)}</div>
                    {days}
            </div>
        )
    }
}