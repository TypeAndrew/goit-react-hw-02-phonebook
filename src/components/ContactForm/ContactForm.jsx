import PropTypes from 'prop-types';
import { Component } from "react";

export class ContactForm extends Component {
    
    state = {
        name: '',
        number: ''
    }
    
    handleChange = (evt) => {
    
        const {name,value } = evt.target;
        this.setState({[name] : value });  
    }

    onSubmit = (evt) =>{
        //const { name, number } = this.state;
        evt.preventDefault();
        const { handleSubmit } = this.props;
        handleSubmit(this.state.name,this.state.number);
        this.setState({ name: '' , number: ''});
    }

    render() {
        
        const { name, number } = this.state;
        
        return (
            <>
        
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name</label>
            
               
                        <input onChange={this.handleChange}
                  
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
                        <input onChange={this.handleChange}
                
                            type="tel"
                            name="number"
                            value={number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </div>
           
    
                    <button  type="submit">Add contact</button>
                </form>
            </>
        )
    }
}    

ContactForm.propTypes = {
    handleSubmit: PropTypes.func,
};
