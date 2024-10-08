import logo from '../assets/logo.png'

function Body() {
    return (
        <div class="body-container">
            <div class="container">
                <div className="text-container">
                   <h2>
                        OurExpenses is coming soon!
                   </h2>
                   <p>
                        We are developing a new app to split your expenses with your friends with a minimalist design based on the last trends!
                   </p>
                   <p>
                        We are going to introduce the app to you in a desktop version but we are already working on a mobile app for Android and iOS
                   </p>
                </div>
                <img src={logo} alt="Logo de OurExpenses"/>
            </div>
        </div>
    )
}

export default Body;