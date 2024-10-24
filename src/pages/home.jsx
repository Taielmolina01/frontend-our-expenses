import NavbarHome from "../components/navbarHome";
import BodyHome from "../components/bodyHome"
import Footer from "../components/footer";
import { useUser } from '../userContext.jsx';


function Home() {

    const { user } = useUser();

    const currentUser = user[0];

    console.log(user);

    return (
        <div className ="home-container">
            <NavbarHome currentUser={currentUser}/>
            <BodyHome currentUser={currentUser}/>
            <Footer />
        </div>
    )
}

export default Home;