// home
import React, { Component } from 'react';
import './App.css';
import SideNav from './sidenav';
import Menu from './menu';
import Footer from './footer';

class Container extends Component {
  constructor(props){
    super(props)

    this.state = {
      isVisible: false,
      isLoading: true
    }
  }

  toggleSideNav = () => {
    this.setState( prevState => ({
      isVisible: !prevState.isVisible
    }));  
  }

  render() {
    return (
       <div>
        <SideNav toggle={this.state.isVisible ? "visible" : ""} onClick={this.toggleSideNav}/>
        <Menu className={this.state.isVisible ? "open" : ""} onClick={this.toggleSideNav}/>
        {this.props.children}
        <Footer /> 
      </div>
    );
  }
}

export default Container;
