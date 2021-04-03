import './Reviews.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { editReview, createReview } from '../../store/review';
import { NavLink, Route, useHistory } from 'react-router-dom';



function Reviews({ id }) {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.review)
    const history = useHistory();
    console.log(reviews)




    useEffect(() => {
        // dispatch(editReview());
        // dispatch(createReview());
    }, [dispatch, ])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/reviews');
    }

    return (
        <div>
            <h2>REVIEWS</h2>
            <ul className='reviews-list'>
                {Object.values(reviews).map(review => (
                    <>
                        <li key={review.title}>
                            {review.title}
                        </li>
                        <li key={review.body}>
                            {review.body}
                        </li>
                        <li key={review.rating}>
                            Rating: {review.rating}
                        </li>
                    </>
                ))}
            </ul>
            <button onClick={handleSubmit}>
                Create a Review here!
            </button>
        </div>
    )
};

export default Reviews;
