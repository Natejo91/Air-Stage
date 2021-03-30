import { getVenues } from '../../store/venue';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Venues.css';

function VenuesPage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVenues())
    }, [dispatch]);

    const venues = useSelector(state => {
       return state.venue.list
    });

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ul>
                {venues?.map(venue => (
                    <NavLink to={`/venues/${venue.id}`}>
                        <li key={venue.id}>
                            {venue.title}
                        </li>
                    </NavLink>
                ))}
            </ul>
        )
    } else {
        sessionLinks = (
            <Redirect to='/login'/>
        )
    }

    return (
        <div id='venueContainer'>
            <h1>Venues</h1>
            {sessionLinks}
        </div>
    )
}

export default VenuesPage;
