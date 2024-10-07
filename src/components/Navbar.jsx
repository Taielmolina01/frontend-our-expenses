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
                        Iniciar sesión
                    </button>
                </Link>
                <Link to="/signUp">
                    <button class="sign-up">
                        Registrarse
                    </button>
                </Link>
            </div>
        </nav>
    )
}   

export default Navbar;