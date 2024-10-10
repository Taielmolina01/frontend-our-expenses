import NavbarHome from "../components/navbarHome";
import BodyHome from "../components/bodyHome"
import Footer from "../components/footer";

function Home() {
    return (
        <div class ="home-container">
            <NavbarHome />
            <BodyHome />
            <Footer />
        </div>
    )
}

export default Home;