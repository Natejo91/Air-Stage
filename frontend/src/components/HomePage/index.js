// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReservationsPage from '../ReservationsPage';
import UserReviews from '../UserReviews';
// import { getUserReviews } from '../../store/userReviews';

function HomePage() {
    // const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    // const userId = user.id;

    // useEffect(() => {
    //     dispatch(getUserReviews(userId));
    // }, [ dispatch, userId ])


    let sessionLinks;
    if (user) {
        sessionLinks = (
            <>
                <ReservationsPage />
                <UserReviews />
            </>
        )
    } else {
        sessionLinks = (
            <>
            </>
        )
    }
    return (
        <>
            {sessionLinks}
        </>

    )
}

export default HomePage;
