import * as searchActions from '../../store/search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './searchBar.css'

function SearchBar() {
    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchActions.getSearch(search))
        history.push("/list")
    }

    return (
        <div id='search-bar'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <button id='search-button' onClick={(e) => handleSubmit(e)} type='submit'>Search</button>
                <input
                    value={search}
                    name='search'
                    placeholder='Search...'
                    onChange={(e) => setSearch(e.target.value)}
                    />
            </form>
        </div>
    );
}

export default SearchBar;
