import React, { Component } from 'react';


class Clock extends Component {

  addZero = (clockData) => {

    let clockString = new String(clockData);

      if (clockString.length >= 2) { 
        return clockString;

      } else {
        return (`0${(clockString.slice(0, clockString.length))}`);
        
      }
    }

    render() { 

      return (
        <React.Fragment>
          <div className="clock-box">
            <span className="hours">
              {this.addZero(this.props.clockDate.getHours())}.
            </span>

            <span className="minutes">
              {this.addZero(this.props.clockDate.getMinutes())}.
            </span>
              
            <span className="seconds">
              {this.addZero(this.props.clockDate.getSeconds())}
            </span>
          </div>
        </React.Fragment>
      );
    }

}
 
export default Clock;