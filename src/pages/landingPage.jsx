import BodyLandingPage from "../components/bodyLandingPage";
import FooterLandingPage from "../components/footerLandingPage";
import NavbarLandingPage from "../components/navbarLandingPage";

function LandingPage() {
    return ( 
        <div className="landing-container">
            <NavbarLandingPage />
            <BodyLandingPage />
            <FooterLandingPage />
        </div>
    )
}

export default LandingPage;