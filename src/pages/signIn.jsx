import Footer from "../components/footer";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarSign from "../components/navbarSign";
import BACK_URL from "../utils"


function SignIn() {

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);


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
          } finally {
            setIsLoading(false)
          }
    }

    return (
        <>
            <NavbarSign />
            <div className="form-container">
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