import Footer from "../components/footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSign from "../components/navbarSign";


const BACK_URL = "";

function SignIn() {

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const json = {};

        json["email"] = formData.get('email');
    
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
                setError("No hay un usuario con ese email registrado")
            } else {
                if (data.password === formData.get('password')) {
                    router.push("/users/" + data.email);
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
            <NavbarSign />
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Sign in to OurExpenses</h2>
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        required
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input type="submit" value="Sign in"/>
                    <p>
                        Still not a user?{" "}
                        <Link href="/signUp">
                            <a style={{ color: 'green', textDecoration: 'underline' }}>Sign up</a>
                        </Link>
                    </p>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignIn;