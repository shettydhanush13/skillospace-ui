import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Root from './pages/root'
import Home from './pages/root2'
import Learn from './pages/learn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path={'/'} element={<Home/>} />
          <Route exact path={'/learn/:id'} element={<Learn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
