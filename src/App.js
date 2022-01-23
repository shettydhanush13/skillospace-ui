import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/root'
import Learn from './pages/learn'
import Register from './pages/register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path={'/'} element={<Home/>} />
          <Route exact path={'/login'} element={<Register/>} />
          <Route exact path={'/learn/:id'} element={<Learn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
