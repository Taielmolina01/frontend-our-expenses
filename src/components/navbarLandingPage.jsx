import { Link } from 'react-router-dom';
import NavBarTo from './navBarTo';

function NavbarLandingPage() {
    return (
        <nav>
            <NavBarTo link={"/"} />
            <div className="on-right">
                <Link to="/signIn">
                    <button className="sign-in">
                        Sign in
                    </button>
                </Link>
                <Link to="/signUp">
                    <button className="sign-up">
                        Sign up
                    </button>
                </Link>
            </div>
        </nav>
    )
}   

export default NavbarLandingPage;