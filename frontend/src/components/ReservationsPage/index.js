import './ReservationsPage.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getReservation} from '../../store/reservation';

function ReservationsPage({ sessionUser }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getReservation(sessionUser))
    }, [dispatch, sessionUser])

    return (
        <>

        </>
    )
}

export default ReservationsPage;
