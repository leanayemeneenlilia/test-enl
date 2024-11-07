import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import NavBar from './components/NavBar';

function App() {
  const myWidth = 220;

  console.log("App component is rendering...");

  return (
    <div className="App">
      {console.log("Rendering NavBar with content...")}

      <NavBar drawerWidth={myWidth} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
