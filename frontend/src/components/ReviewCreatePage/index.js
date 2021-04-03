import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ReviewCreatePage.css';



function ReviewCreatePage({ venueId }) {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ reviewImgUrl, setReviewImgUrl ] = useState('');
    const history = useHistory();

    console.log('in reviewcreatepage')

    const handleSubmit = (e) => {
        e.preventDefault(e);
        history.push('/');
    }

    return (
        <div className='review-container'>
            <form onSubmit={handleSubmit} className='reviewForm'>
                <h2 id='createReview'>Create a Review</h2>
                <label>
                Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                </label>
                <label>
                Body
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
                </label>
                <label>
                Rating
                <input
                    type="text"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
                </label>
                <label>
                Image
                <input
                    type="text"
                    value={reviewImgUrl}
                    onChange={(e) => setReviewImgUrl(e.target.value)}
                    required
                />
                </label>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )


}

export default ReviewCreatePage;
