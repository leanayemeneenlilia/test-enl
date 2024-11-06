import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import NavBar from './components/NavBar';

function App() {
  const myWidth = 220;

  // Ajouter un log pour vérifier si le composant App se rend correctement
  console.log("App component is rendering...");

  return (
    <div className="App">
      {/* Log pour vérifier si la barre de navigation est rendue */}
      {console.log("Rendering NavBar with content...")}

      <NavBar 
        drawerWidth={myWidth}
        content={
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        }
      />
    </div>
  );
}

export default App;
