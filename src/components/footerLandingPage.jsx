import MemberItem from "./memberItem";

function FooterHome() {
    const members = {
        "Batemarco, Joaquín": "https://github.com/BA73C0",
        "Molina, Taiel": "https://github.com/Taielmolina01",
        "Puglisi, Agustín": "https://github.com/agusspuglisi",
        "Schulc, Mariana": "https://github.com/marian1908",
        "Taibo, Nazareno": "https://github.com/PMNaza"
    }

    return (
        <footer>
            <div className="about-us">
                <h2>
                    OurExpenses
                </h2>
                <div>
                    <p>
                        We are the group number 1 of the course Turri in the subject Management and Development of software projects at FIUBA.
                    </p>
                    <h3>
                        Members
                    </h3>
                    <ul>
                        {Object.keys(members).map((memberName) => (
                            <MemberItem name={memberName} link={members[memberName]} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="help">
                <h2>
                    Help
                </h2>
                <div>
                    <p>
                        Code
                    </p>
                    <p>
                        Documentation
                    </p>
                </div>
            </div>
            <div className="company">

            </div>
        </footer>    
    ) 
}

export default FooterHome;