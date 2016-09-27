import React from "react";


export default class Header extends React.Component {


    render() {

        return (
            <div>
                {this.props.week.map((day, index)=> <span key={day}
                    className={"header " + ((this.props.selectedDayIndex === index) ? "selected" : "")}
                    onClick={()=> this.props.setSelectedDay(index)}>
                        {day}
                        </span>)}
            </div>
        )
    }
}