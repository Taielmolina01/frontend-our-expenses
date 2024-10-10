import Body from "../components/bodyLandingPage";
import FooterHome from "../components/footerLandingPage";
import Navbar from "../components/navbar";

function LandingPage() {
    return ( 
        <div class="landing-container">
            <Navbar />
            <Body />
            <FooterHome />
        </div>
    )
}

export default LandingPage;