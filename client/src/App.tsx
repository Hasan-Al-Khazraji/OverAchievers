import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Vote from './pages/Vote';
import Live from './pages/Live';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/vote" element={<Vote />}/>
          <Route path="/live" element={<Live />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
