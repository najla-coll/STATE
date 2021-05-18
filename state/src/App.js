
import './App.css';

import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
 constructor(){
   super();
   this.state ={
     shows : false
   }
 }
 
 
  toggleHidden () {
            this.setState({
              shows: !this.state.shows
            })
          }        
          
componentDidMount(){
    this.timerID = setInterval(
     () => this.toggleHidden(),
    5000
            );
          }
componentDidUpdate(){

          }
componentWillUnmount(){
            clearInterval(this.timerID)
          }
  
 
  render() {
  
    return (
     
        
        <div >
        <button onClick={this.toggleHidden.bind(this) }>
          Click to shows 
        </button>
        {!this.state.shows && <Child />}
        </div>
      
    )
  }
}




