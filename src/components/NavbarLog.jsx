import { Link } from 'react-router-dom';

function NavbarLog() {
    return (
        <nav>
            <Link to="/">
                <div class="enterprise-name">
                    OurExpenses
                </div>
            </Link>
        </nav>
    )
}   

export default NavbarLog;