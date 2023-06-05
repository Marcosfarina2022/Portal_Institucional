import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter  , Routes, Route } from 'react-router-dom';
import Galeria from './Components/Galeria/Galeria';
import Noticias from './Components/Noticias/Noticias';
import Header from './Components/Header/Header';
import Institución from './Components/Institucion/Institucion';
import Contacto from './Components/Contacto/Contacto';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      <Routes>
         <Route path ="/" element ={<Home />}/>
         <Route path ="/galeria" element={<Galeria />}/>
         <Route path="/noticias" element={<Noticias />}/>
         <Route path="/institucion" element={<Institución />}/>
         <Route path="/contacto" element={<Contacto />}/>
      </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
