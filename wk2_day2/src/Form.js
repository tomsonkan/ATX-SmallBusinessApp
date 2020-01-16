import React from 'react';

export default class Form extends React.Component {
  state = {
    firstName:'',
    lastName:'',
  }

  handleOnInputChange(event) {
    const query = event.target.value
    console.log(query)
  }

  render() {
    return (
      <>
      <h1>Name</h1>
      <form>
        <input placeholder = "First Name" 
        value = {this.state.firstName} 
        onChange = {this.handleOnInputChange}/>
      </form>
      </>
    )
  }
}