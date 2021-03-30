import * as venueActions from '../../store/venue';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';




function VenuesPage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(venueActions.getVenues())
    }, [dispatch])

    const venues = useSelector(state => {
       return state.list
    });

    if (!venues) {
        return null;
    }

    return (
        <div className='venueContainer'>
            <h2>Hello</h2>
            <ul>
                {venues.map(venue => (
                    <li key={venue.id}>{venue}</li>
                ))}
            </ul>
        </div>
    )
}

export default VenuesPage;
