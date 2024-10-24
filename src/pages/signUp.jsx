import Footer from "../components/footer";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarSign from "../components/navbarSign";
import BACK_URL from "../utils"
import { useUser } from '../userContext.jsx';

function SignUp() {

    const { setUser } = useUser();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const password = formData.get('password')

        if (password !== formData.get('confirmPassword')) {
            setError('Las contraseñas no coinciden');
            return;
        }
        
        const json = {};

        json["email"] = formData.get('email');
        json["name"] = formData.get('name');
        json["password"] = password;
    
        let res;

        try {
            setIsLoading(true)
            res = await fetch(`${BACK_URL}/users`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(json),
            });

            const data = await res.json();
      
            if (!res.ok) {
                // usar res.status para levantar bien los errores
                setError("Atrapé algun error")
            } else {
                setUser(data);
                navigate("/home"); 
            }
        } catch (e) {
            console.log(e)
            setError("Error de conexión");
            return;
        } finally {
            setIsLoading(false)
        }
    }   

    return (
        <>
            <NavbarSign />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <label>Enter your name</label>
                    <input 
                        type="string"
                        name="name"
                        required
                    />
                    <label>Enter your email</label>
                    <input 
                        type="email"
                        name="email"
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
                        type="password"
                        name="confirmPassword"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button  className={isLoading ? 'btn-disabled' : 'btn'}  type="submit" disabled={isLoading}>
                        {isLoading ? "Loading ..." : "Sign in"}
                    </button>
                    <p>
                        Already a user?{" "}
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