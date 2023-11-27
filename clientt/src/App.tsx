import './App.css';
import  { Route , Routes } from 'react-router-dom'
import Home from './pages/home/page'
import Dashboard from './pages/dashboard/page';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
