import Home from './Components/Home/Home';
import { BrowserRouter  , Routes, Route } from 'react-router-dom';
import Galeria from './Components/Galeria/Galeria';
import Noticias from './Components/Noticias/Noticias';
import Header from './Components/Header/Header';
import Institución from './Components/Institucion/Institucion';
import Contacto from './Components/Contacto/Contacto';
import Footer from './Components/Footer/Footer';
import './App.css';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import FormLogin from './Components/FormLogin/FormLogin';
import SobreNosotros from './Components/SobreNosotros/SobreNosotros';
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
         <Route path="/registro" element={<RegistrationForm />}/>
         <Route path="/ingresar" element={ <FormLogin />} />
         <Route path="/registrar" element={<RegistrationForm/>}/>
         <Route path="/sobreNosotros" element={<SobreNosotros/>} />
      </Routes>  
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
