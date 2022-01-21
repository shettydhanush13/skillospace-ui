import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Root from './pages/root'
import Learn from './pages/learn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path={'/'} element={<Root/>} />
          <Route exact path={'/learn/:id'} element={<Learn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
