import * as searchActions from '../../store/search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './searchBar.css'

function SearchBar() {
    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='search'
                value={search}
                name='search'
                placeholder='Search...'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;
