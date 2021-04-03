import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './ListSearchPage.css';



function ListSearchPage() {
    const venueSearch = useSelector(state => state.search);
    console.log(venueSearch, 'Venue City');
    // const venues = venueSearch.map(venue => {
        return (
            <div id='venue-search-container'>
                <ul>
                    {Object.values(venueSearch).map((venue, i) =>(

                        <li key={`li-${i}`}>
                            <NavLink to={`/venues/${venue.id}`} key={venue.id}>
                            <span className='venue-title' key={`span-${i}`}>{venue.title}</span>
                                <img id='venue-image' src={venue.bookingImgUrl} alt='venue'/>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            // {/* <ResultsTile venue={venue} key={venue.id} /> */}
        )
    // })

    // return (
    //     <div id='venue-search'>
    //         {venues}
    //     </div>
    // )
}

export default ListSearchPage;
