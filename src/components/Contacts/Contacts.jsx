import { nanoid } from 'nanoid'

export function Contacts(props)  {
   
      const { element,  onDelete } = props;
      return (
        <>
         
          
              
                  
                <li key={nanoid()}><div>{element.name}</div><div> {element.number}</div>
                <button onClick={onDelete} id={element.name} type="button" >delete </button></li>
          
          
          
        </>
      )
     
    }