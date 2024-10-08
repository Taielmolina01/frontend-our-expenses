import Footer from "../components/Footer";
import NavbarLog from "../components/NavbarLog";
import React, { useState } from 'react';

const BACK_URL = "";

function SignIn() {

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const json = {};

        json["mail"] = formData.get('mail');
    
        let res;

        try {
            res = await fetch(`${BACK_URL}/users`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(json),
            });

            const data = await res.json();
      
            if (!res.ok) {
                setError("No hay un usuario con ese mail registrado")
            } else {
                if (data.password === formData.get('password')) {
                    router.push("/users/" + data.mail);
                } else {
                    setError("La contraseña es incorrecta")
                }
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
                    <h2>Sign in your account</h2>
                    <label>Mail</label>
                    <input 
                        type="email"
                        required
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input type="submit" value="Sign in"/>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignIn;