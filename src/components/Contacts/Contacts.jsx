import { Component } from "react"; 

export class Contacts extends Component {
   
    
    render(){
      return (
        <>
        <ul>
          {
              this.props.contacts.map(element =>
                  element.name.toLowerCase().includes(this.props.filter.toLowerCase()) &&
                
              <li key={element.name}><div>{element.name}</div><div> {element.number}</div><button onClick={this.props.onDelete} id={ element.name} type="button" >delete </button></li>
          )
          }
        </ul>
        </>
      )
     } 
    }