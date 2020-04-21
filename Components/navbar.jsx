import React, { Component } from "react";

class Navbar extends Component {

  navBarLink = {
    fontWeight: 600,
    fontFamily: "Lato, serif",
    color: "white",
    border: "2px olivegreen transparent",
    padding: "5px",
    backgroundImage: "url('./img/beach.jpg')",
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark nav">
          <a href="#" className="navbar-brand brand-plaque" style={this.navBarLink} onClick = {() =>this.props.onNavChange()}>
            ToDo List
          </a>

          <a href="#" className="lnk" style={this.navBarLink}>
            Home
          </a>

          <a href="#" className="lnk" style={this.navBarLink}>
            About
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
