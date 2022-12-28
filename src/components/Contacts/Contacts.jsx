import PropTypes from 'prop-types';

export function Contacts(props)  {
    const { elements, onDelete } = props;
      return (
        <ul>
          {elements.map(element => 
            <Contact key={element.id} element={element} onDelete={ onDelete} />
          )}
        </ul>
      )
     
}
    
export function Contact(props)  {
      
      const { element,  onDelete } = props;
      return (
 
        <li key={element.name}><div>{element.name}</div><div> {element.number}</div>
        <button onClick={onDelete} id={element.name} type="button" >delete </button></li>
        
      )
     
}

Contacts.propTypes = {
    element: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    }),
  onDelete: PropTypes.func,
};