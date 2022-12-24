import { Component } from "react";
import { Contacts } from '../Contacts/Contacts';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
export class Phonebook extends Component {
  
  state = {
    contacts: [],
    filter: '',
    name: '',
    namber: ''
  }

  handleFilter= (evt) => {
      this.setState( {filter: evt.target.value }); 
   }

  handleDelete = (evt) => {
    //console.log(this.state);
    this.setState(prevState => {
      const newContacts = this.state.contacts.filter(el => el.name !== evt.target.id);
      return { contacts: newContacts };
    });  
   }

  handleChange = (evt) => {
    //console.log(this.state);
    const {name,value } = evt.target;
      this.setState({[name] : value });  
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const user = form.elements.name.value;
    const number = form.elements.number.value;
    //console.log(user);
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
      <>
        <h1>Phonebook</h1>
        <ContactForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state } />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <Contacts contacts={this.state.contacts} onDelete={this.handleDelete}
            filter={this.state.filter} name={this.state.name} number={this.state.number} />
      </>
    )
   } 
  }
