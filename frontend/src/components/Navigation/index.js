import { NavLink } from 'react-router-dom';
import {useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import icon from '../../images/Music.png';

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
                <div className='navLoginSignup'>
                    <div>
                        <NavLink to='/login' id='homeLogin'>Log In</NavLink>
                    </div>
                    <div>
                        <NavLink to='/signup' id='homeSignup'>Sign Up</NavLink>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <ul>
            <li className='navBar'>
                <NavLink exact to='/' id='homeLink'>
                    AirStage
                    <img src={icon} alt='AirStage Icon' id='musicIcon'/>
                </NavLink>
                {isLoaded && sessionLinks}
            </li>

        </ul>
    );
}

export default Navigation;
