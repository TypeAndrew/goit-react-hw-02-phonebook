import { Component } from "react";
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''   
  }

  handleFilter= (evt) => {
      
    this.setState({ filter: evt.target.value });
    this.getFilterValueOn();
  }
  
  handleDelete = (evt) => {
    
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(el => el.name !== evt.target.id);
      return { contacts: newContacts };
    });  
   }

  handleSubmit = (evt) => {
    
    evt.preventDefault();
    //const { name, number } = this.state;
    const name = evt.currentTarget.elements.name.value;
    const number = evt.currentTarget.elements.number.value;

    const userExist = this.state.contacts.find(element => element.name === name);

    if (userExist !== undefined) {
        alert(`The ${name} is already in contacts`);
    } else {
        this.setState({ name: '' , number: ''});
        this.setState({ contacts: [...this.state.contacts, { name: name, number: number }] });
    }
  }

  getFilterValueOn = () => {
    
   return this.state.contacts;
  }
    
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
          listStyleType: 'none'
        }}
      >
      
        <h1>Phonebook</h1>
        <ContactForm  handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} filter={this.state.filter} />
        <ul>
        {this.state.contacts.map(element =>
          element.name.toLowerCase().includes(this.state.filter.toLowerCase()) &&
          < Contacts element={element} onDelete={this.handleDelete}
           />)}
        </ul>
      
      </div>
    );
  }
};


 
  
