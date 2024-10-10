import BodyLandingPage from "../components/bodyLandingPage";
import FooterLandingPage from "../components/footerLandingPage";
import NavbarLandingPage from "../components/navbarLandingPage";

function LandingPage() {
    return ( 
        <div class="landing-container">
            <NavbarLandingPage />
            <BodyLandingPage />
            <FooterLandingPage />
        </div>
    )
}

export default LandingPage;