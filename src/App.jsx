import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import SignIn from './pages/signIn'; // Otro componente para una subpágina
import SignUp from './pages/signUp'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/signIn" element={<SignIn />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
