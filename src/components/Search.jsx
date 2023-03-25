import React, { useState } from 'react';

export const Search = ({ handleSearch, placeholder }) => {

    const [state, setState] = useState({
        filter: '',
        search: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value
        });
    }

    const search = () => {
        handleSearch(state.search);
    }

    return (
        <div className='search-wrap'>
            <input value={state.search} name='search' onChange={handleChange} className='search-input' type='search' placeholder={placeholder} />
            <button type='button' onClick={search}>Buscar</button>
        </div>
    )
}
