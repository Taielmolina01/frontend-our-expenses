import Footer from "../components/Footer";
import NavbarLog from "../components/NavbarLog";

function SignIn() {
    return (
        <>
            <NavbarLog />
            <div class="form-container">
                <form>
                    <h2>Sign in your account</h2>
                    <label>Mail</label>
                    <input type="email"/>
                    <label>Password</label>
                    <input type="password"/>
                    <input type="submit" value="Sign in"/>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignIn;