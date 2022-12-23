import { Component } from "react";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook />
      <Contacts />
    </div>
  );
};

class Phonebook extends Component {
  
  state = {
    contacts: [],
    name: ''
  }

  handleChange(){

  }

  handleSubmit = (evt)=>{
    console.log(evt.target[0].value);
    this.setState({name: evt.target[0].value});
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="User" />
       
        <button type="submit">Add contact</button>
      </form>
    )
   } 
  }

  class Contacts extends Component {
   
    handleChange(){
  
    }
  
    handleSubmit(){
  
    }
  
    render(){
      return(
        <ul>
          <li>++++</li>
        </ul>
        
      )
     } 
    }
  
