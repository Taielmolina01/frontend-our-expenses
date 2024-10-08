import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div class="enterprise-name">
                OurExpenses
            </div>
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

export default Navbar;