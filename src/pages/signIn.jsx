import Footer from "../components/Footer";
import NavbarLog from "../components/NavbarLog";

function SignIn() {
    return (
        <>
            <NavbarLog />
            <div class="form-container">
                <form>
                    <h2>Ingrese en su cuenta</h2>
                    <label>Email</label>
                    <input type="email"/>
                    <label>Contraseña</label>
                    <input type="password"/>
                    <input type="submit"/>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignIn;