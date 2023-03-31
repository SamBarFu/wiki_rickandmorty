import React, { useState } from 'react';
import { Loading } from '@components/Loading';

export const Search = ({ handleSearch, placeholder }) => {

    const [loading, setLoading] = useState(false);
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

    const search = async (event) => {
        setLoading(true);
        if (event.key === 'Enter' || event.type === 'click') {
            await handleSearch(state.search);
        }
        setLoading(false);
    }

    return (
        <div className='search-wrap'>
            <input value={state.search} name='search' onChange={handleChange} onKeyDown={search} className='search-input' type='search' placeholder={placeholder} disabled={loading} />
            <button type='button' onClick={search}>{loading ? <Loading /> : 'Buscar'}</button>
        </div>
    )
}
