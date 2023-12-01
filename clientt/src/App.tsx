import './App.css';
import  { Route , Routes } from 'react-router-dom'
import Home from './pages/home/page'
import Dashboard from './pages/dashboard/page';
import Signin from './pages/auth/signin'
import Signup from './pages/auth/signup'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/auth/signup' element={<Signup/>}/>
      <Route path='/auth/signin' element={<Signin/>}/>
    </Routes>
  );
}

export default App;
