import { Link } from 'react-router-dom';
import NavBarTo from './navBarTo';

function NavbarLandingPage() {
    return (
        <nav>
            <NavBarTo link={"/"} />
            <div class="on-right">
                <Link to="/signIn">
                    <button class="sign-in">
                        Sign in
                    </button>
                </Link>
                <Link to="/signUp">
                    <button class="sign-up">
                        Sign up
                    </button>
                </Link>
            </div>
        </nav>
    )
}   

export default NavbarLandingPage;