import './App.css'
import React, { Component } from 'react'
import Page from './Page.jsx';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      message: "Hello world",
    };
  }

  handleClick = () => {
    //this.setState({ message: "Button clicked!"});
    this.setState((prevState) => ({
      message: prevState.message === "Hello world"? "Button Clicked" : "Hello world"
    }));
  }

  componentDidMount(){
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>{this.state.message}</p>
          <button onClick={this.handleClick}>Click me</button>
          <Page name = {"Amalya"}/>
        </header>
      </div>
    );
  }
}

