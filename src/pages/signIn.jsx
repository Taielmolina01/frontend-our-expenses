import Footer from "../components/footer";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarSign from "../components/navbarSign";
import BACK_URL from "../utils"
import { useUser } from '../userContext.jsx';

function SignIn() {

    const { setUser } = useUser();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const json = {};

        json["email"] = formData.get('email');
    
        let res;

        try {
            setIsLoading(true);
            res = await fetch(`${BACK_URL}/users`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
      
            if (!res.ok) {
                // usar res.status para levantar bien los errores
                setError("No hay un usuario con ese email registrado")
            } else {
                setUser(data);
                navigate("/home"); 
            }
        } catch (e) {
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
                    <h2>Sign in</h2>
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
                    <button  className={isLoading ? 'btn-disabled' : 'btn'}  type="submit" disabled={isLoading}>
                        {isLoading ? "Loading ..." : "Sign in"}
                    </button>
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