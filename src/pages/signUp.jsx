import Footer from "../components/Footer";
import NavbarLog from "../components/NavbarLog";

function SignUp() {
    return (
        <>
            <NavbarLog />
            <div class="form-container">
                <form>
                    <h2>Sign up</h2>
                    <label>Enter your mail</label>
                    <input type="email"/>
                    <label>Create a password</label>
                    <input type="password"/>
                    <label>Repeat the password</label>
                    <input type="password"/>
                    <input type="submit" value="Sign up"/>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignUp;