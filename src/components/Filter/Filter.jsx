import { Component } from "react";

export class Filter extends Component {
  
  render() {

    return (
    
        <label> Filter
          <input onChange={this.props.handleFilter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
   
    )
   } 
  }
