
import './App.css';

import React, { Component } from 'react'
import Child from './Child'

export default class App extends Component {
 
 
  constructor () {
            super()
            this.state = {
              shows: true
            }
          } 
  toggleHidden () {
            this.setState({
              shows: !this.state.shows
            })
          }        
    
    
  
 
  render() {
  
    return (
     
        
        <div>
        <button onClick={this.toggleHidden.bind(this)} >
          Click to show 
        </button>
        {!this.state.shows && <Child />}
        </div>
      
    )
  }
}




