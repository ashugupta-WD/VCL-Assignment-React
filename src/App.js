import './App.css';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import LoginState from "./context/LoginState"

function App() {
  return (
    <>
    <LoginState>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </LoginState>
    </>
  );
}

export default App;
