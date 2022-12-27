import PropTypes from 'prop-types';

export function Filter(props)  {
    const { handleFilter } = props; 
    
    return (
      <label > Filter
          <input onChange={handleFilter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
   
    )
    
  } 

  Filter.propTypes = {
    handleSubmit: PropTypes.func,
};
