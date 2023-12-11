import './App.css';
import {Route,Routes} from 'react-router-dom';
import  {BrowserRouter} from 'react-router-dom'
import Navbar from './components/NavBar';
import Home from './pages/Home'
import  Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/main/PrivateRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
