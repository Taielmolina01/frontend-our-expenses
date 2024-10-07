import Footer from "../components/Footer";
import NavbarLog from "../components/NavbarLog";

function SignUp() {
    return (
        <>
            <NavbarLog />
            <div class="form-container">
                <form>
                    <h2>Cree su cuenta</h2>
                    <label>Ingrese su mail</label>
                    <input type="email"/>
                    <label>Ingrese su contraseña</label>
                    <input type="password"/>
                    <label>Ingrese nuevamente la contraseña</label>
                    <input type="password"/>
                    <input type="submit"/>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignUp;