import Footer from "../components/Footer";
import NavbarLog from "../components/NavbarLog";

const BACK_URL = "";

function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }
        
        const json = {};

        json["mail"] = formData.mail;
        json["name"] = formData.name;
        json["password"] = formData.password;
    
        let res;

        try {
            res = await fetch(`${BACK_URL}/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(json),
            });

            const data = await res.json();
      
            if (!res.ok) {
                setError("Atrapé algun error")
            } else {
                router.push("/users/" + data.mail);
            }
          } catch (e) {
            setError("Error de conexión");
            return;
          }
    }   

    return (
        <>
            <NavbarLog />
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <label>Enter your name</label>
                    <input 
                        type="string"
                        value="formData.name"
                        required
                    />
                    <label>Enter your mail</label>
                    <input 
                        type="email"
                        value="formData.mail"
                        required
                    />
                    <label>Create a password</label>
                    <input 
                        type="password"
                        value="formData.password"
                        required
                    />
                    <label>Repeat the password</label>
                    <input 
                        type="formData.confirmPassword"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input type="submit" value="Sign up"/>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignUp;