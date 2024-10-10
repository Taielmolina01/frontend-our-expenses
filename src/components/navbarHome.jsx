import { Link } from 'react-router-dom';
import NavBarTo from './navBarTo';

function NavbarHome() {
    return (
        <nav>
            <NavBarTo link={"/home"} />
            <div class="on-right">
                User name placeholder
            </div>
        </nav>
    )
}   

export default NavbarHome;