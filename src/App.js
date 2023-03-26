import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
				<Navbar /> // Incluimos Navbar fuera de las rutas, pero dentro del Router
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<Desconocido />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
