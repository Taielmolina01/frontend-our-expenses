import NavBarTo from './navBarTo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavbarHome({ currentUser }) {
    return (
        <nav className="navbar-home">
            <NavBarTo link={"/home"} />
            <div className="on-right">
                <FontAwesomeIcon icon={faUser}/>
                {currentUser.name}
            </div>
        </nav>
    )
}   

export default NavbarHome;