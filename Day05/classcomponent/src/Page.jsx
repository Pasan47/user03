import React, { Component } from 'react'

export default class Page extends Component {
    
  constructor(props){
    super(props);
    console.log(props.name);
    
    this.state = {
        pageNumber : 0,
        pageContent:"",
    }
      
    };

    static getDerivedStateFromProps(nextProps, prevState){
      console.log("Get Derived State From Props");
      if(nextProps.value !== prevState.value){
        return {value: nextProps.value}
      }
      return null;
    }


  render() {
    return (
      <div>Hii {this.props.name}</div>
    )
  }
}
