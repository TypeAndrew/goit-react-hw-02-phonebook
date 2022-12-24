import { Component } from "react";

export class ContactForm extends Component {
  
    render() {
    
        const { name, number } = this.props.state;
        return (
            <>
        
                <form onSubmit={this.props.handleSubmit}>
                    <div>
                        <label>Name</label>
            
               
                        <input onChange={this.props.handleChange}
                  
                            type="text"
                            name="name"
                            value={name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        
                        />
                    </div>
            
                    <div>
                        <label>Phone</label>
                        <input onChange={this.props.handleChange}
                
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </div>
           
    
                    <button type="submit">Add contact</button>
                </form>
            </>
        )
    }
}    