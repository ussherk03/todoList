import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import ToDos from './Components/todos';
import ToDo from './Components/todo';
import Clock from './Components/clock';
import About from './Components/about';
import { BrowserRouter as Route, Router } from 'react-router-dom';


class App extends Component {
  state = {  
    todoItems: [
      { id: 1, textString: "30 pushups for 60 seconds", isCompleted: false },
      { id: 2, textString: "5 kilometre run under the sun", isCompleted: false },
      { id: 3, textString: "Go for bungee jumping before sunbathing", isCompleted: false },
    ],

    time: new Date(),


  };

  // Tick will update the 'time' in App.state or this.state
  tick = () => {
    
    this.setState({ time: new Date() });

  }

  // ComponentDidMount() is executed when the component is mounted on the React DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // ComponentWillUnmount() is used for clearing items (handlers, events, components, react-elements)
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  
  onHandleClick = () => {

    console.log('Brand-logo Click Successful');
    
    // Don't ever use the '.' for classes in toggles. No dots for Toggle
    document.querySelector('.searchbox').classList.toggle('grey-outline');
    document.querySelector('.navbar-brand').classList.toggle('grey-plaque');
    document.querySelector('body').classList.toggle('beach-bg');

    this.setState( {handledBG : true} );
  }


  // Handles the Delete Events
  onHandleDelete = todoID => {

    console.log('Delete Clicked', todoID);

    this.setState({
      todoItems: [...this.state.todoItems.filter(todo => todo.id !== todoID) ]
    });

  }

  // Handles the ClickToDo Events to green-check ticks.
  onHandleClickToDo = todoID => {

    let checkCircles = document.querySelectorAll('.tick');

    checkCircles[todoID - 1].classList.toggle('check');
    document.querySelectorAll('.text')[todoID - 1].classList.toggle('white-text');

    console.log('Clicked Successfully', todoID);

    this.setState( {
      todoItems: this.state.todoItems.map(todo => {
        if (todo.id === todoID) {
          todo.isCompleted = !todo.isCompleted;
        }

        return todo;

      })
    })
  }

  // Adds A new Todo to the items
  handleInput = () => {

    let searchbox = document.querySelector('.searchbox');

    return searchbox.value;

  }


  // Handles Click Event to Store Value for New Object
  handleStoreValue = (todoArr) => {
    console.log('Arrow Clicked Successfully');

    if (todoArr.length !== 5) {
      let inputVal = this.handleInput();

      let newID = (todoArr.length) + 1;

      this.state.todoItems.push({ id: newID, textString: inputVal, isCompleted: false });

      this.setState({ valueInputted: true } );
    }  
  }


  render() { 

    return (
      <Router>
        <React.Fragment>
          
          {/* Navbar */}
          <Navbar onNavChange={this.onHandleClick} />

          {/*About*/}
          <About />

          {/* Clock */}
          <Clock clockDate={this.state.time} />

          {/* Search Box */}
          <div className="search-main">
            <input type="search" className="searchbox" size="45" onKeyPress={() => this.handleInput()} />
            <a href="#" className="search-bttn" onClick={() => this.handleStoreValue(this.state.todoItems)}><i className="fa fa-list"></i></a>
          </div>

          {/* Main Container */}
          <main className="container">
            <ToDos
              todoItems={this.state.todoItems}
              onDelete={this.onHandleDelete}
              onClickToDo={this.onHandleClickToDo}
            />
          </main>

        </React.Fragment>    
      </Router>
    );
  }
}

 
export default App;


