import { NavLink, Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({isActive}) => isActive ? classes.active : undefined}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

/* NavLink vs Link
the className prop, is not the regular className which takes a string, but is a prop that takes a function which 
should return the class name that should be added to the a tag. The function automatically receives an object from which
I can destructure the isActive property. This object is provided by React Router DOM. isActive is a true if the link is 
currently active or is false if do not lead to the curretn route.
*/