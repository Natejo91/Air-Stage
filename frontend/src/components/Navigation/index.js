import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <div className='loginSignup'>
                <NavLink to='/login' id='homeLogin'>Log In</NavLink>
                <NavLink to='/signup' id='homeSignup'>Sign Up</NavLink>
            </div>
        );
    }
    return (
        <ul>
            <li className='navBar'>
                <NavLink exact to='/' id='homeLink'>AirStage</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;
