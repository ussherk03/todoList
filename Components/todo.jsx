import React, { Component } from 'react';

class ToDo extends Component {
  fontz = {
    fontFamily: "Lato, serif",
    fontWeight: 600,
  };


  render() {
    
    const {id, string} = this.props;

    return (
      <React.Fragment>
        <div className="toDo" style={{ cursor: "pointer" }}>
          <i
            className="tick fa fa-check-circle m-2"
            onClick={() => this.props.onClickToDo(id)}
          ></i>

          <p className="text">{string}</p>

          <button className="btn btn-secondary btn-sm m-3">
            <span style={this.fontz} onClick={() => this.props.onDelete(id)}>
              Delete
            </span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
 
export default ToDo;