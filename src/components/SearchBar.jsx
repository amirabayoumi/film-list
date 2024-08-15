import PropTypes from 'prop-types'
import { useState } from 'react'
import'./searchBar.css'

const SearchBar = ({inputValue})=> {
    const [value , setValue ] = useState('');
    const changeHandler =(e) =>{
        const val = e.target.value.toLowerCase();
        setValue(val);
        inputValue(val);
    };
    return (
    

    <div className='searchBar'>
    <input 
        type='text' 
        className='searchInput' 
        placeholder='search by name here' 
        value={value}
        onChange={(e)=> changeHandler(e)}/>
    </div>
    )
}

SearchBar.propTypes = {
    inputValue : PropTypes.func.isRequired
}

export default SearchBar