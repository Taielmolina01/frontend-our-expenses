import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage'
import SignIn from './pages/signIn';
import SignUp from './pages/signUp'
import Home from './pages/home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LandingPage />}/>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
