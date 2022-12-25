import { nanoid } from 'nanoid'

export function Contacts(props)  {
   
      const { contacts, filter, onDelete } = props;
      return (
        <>
          <ul>
            {
                contacts.map(element =>
                    element.name.toLowerCase().includes(filter.toLowerCase()) &&
                  
                  <li key={nanoid()}><div>{element.name}</div><div> {element.number}</div>
                  <button onClick={onDelete} id={element.name} type="button" >delete </button></li>
            )
            }
          </ul>
        </>
      )
     
    }