import React, {Component} from 'react';
import ToDo from './todo';

class ToDos extends Component {

  toDosStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -10%)",

  };

  render() {
      // Destructuring methods of this.props
    const { todoItems, onDelete, onClickToDo} = this.props;

    return (
      <div style={this.todosStyles}>
        {todoItems.map(todo => (
          <ToDo
            key={todo.id}
            id={todo.id}
            string={todo.textString}
            onDelete={onDelete}       
            onClickToDo={onClickToDo}
          />
        ))}
      </div>

    );
  }
}
 
export default ToDos;