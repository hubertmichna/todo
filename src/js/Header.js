import React from "react";


export default class Header extends React.Component {


    render() {

        return (
            <div>
                {this.props.Week.map((day, index)=> <span
                    className={"header " + ((this.props.selectedDayIndex === index) ? "selected" : "")}
                    onClick={()=> this.props.setSelectedDay(index)}>
                        {day}
                        </span>)}
            </div>
        )
    }
}