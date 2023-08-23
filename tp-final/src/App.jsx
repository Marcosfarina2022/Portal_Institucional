import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Galeria from './Components/Galeria/Galeria';
import Noticias from './Components/Noticias/Noticias';
import Encabezado from './Components/Header/Header';
import Institución from './Components/Institucion/Institucion';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import RegistrationForm from './Components/Registro/Registro-usuario';
import FormLogin from './Components/Ingreso/Ingreso-usuario';
import SobreNosotros from './Components/SobreNosotros/SobreNosotros';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Encabezado />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/institucion" element={<Institución />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/auth/registro" element={<RegistrationForm />} />
          <Route path="/auth/ingreso" element={<FormLogin />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
