import React, { Component } from 'react'

export default class App extends Component {
  click(){
    alert("HI");
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>Clike ME</button>
        
      </div>
    )
  }
}
