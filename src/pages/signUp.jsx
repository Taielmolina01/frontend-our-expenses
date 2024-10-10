import Footer from "../components/footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSign from "../components/navbarSign";


const BACK_URL = "";

function SignUp() {

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const password = formData.get('password')

        if (password !== formData.get('confirmPassword')) {
            setError('Las contraseñas no coinciden');
            return;
        }
        
        const json = {};

        json["mail"] = formData.get('mail');
        json["name"] = formData.get('name');
        json["password"] = password;
    
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
            <NavbarSign />
            <div class="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <label>Enter your name</label>
                    <input 
                        type="string"
                        name="name"
                        required
                    />
                    <label>Enter your mail</label>
                    <input 
                        type="email"
                        name="mail"
                        required
                    />
                    <label>Create a password</label>
                    <input 
                        type="password"
                        name="password"
                        required
                    />
                    <label>Confirm your password</label>
                    <input 
                        type="confirmPassword"
                        name="confirmPassword"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input type="submit" value="Sign up"/>
                    <p>
                        Already user?{" "}
                        <Link href="/signIn">
                            <a style={{ color: 'green', textDecoration: 'underline' }}>Sign in</a>
                        </Link>
                    </p>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SignUp;