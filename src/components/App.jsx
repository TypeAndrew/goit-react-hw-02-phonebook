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
    filter: '',
    name: '',
    number: ''
  }

  handleFilter= (evt) => {
      this.setState( {filter: evt.target.value }); 
   }

  handleDelete = (evt) => {
    
    this.setState(prevState => {
      const newContacts = this.state.contacts.filter(el => el.name !== evt.target.id);
      return { contacts: newContacts };
    });  
   }

  handleChange = (evt) => {
    
    const {name,value } = evt.target;
      this.setState({[name] : value });  
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const user = form.elements.name.value;
    const number = form.elements.number.value;
   
      const userExist = this.state.contacts.find(element => element.name === user);
      if (userExist !== undefined) {
          alert(`The ${user} is already in contacts`);
     } else {
        this.setState({ name: '' , number: ''});
        this.setState({ contacts: [...this.state.contacts, { name: user, number: number }] });
    }
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
        <ContactForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state} />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <Contacts contacts={this.state.contacts} onDelete={this.handleDelete}
          filter={this.state.filter} name={this.state.name} number={this.state.number} />
      
      
      </div>
    );
  }
};


 
  
