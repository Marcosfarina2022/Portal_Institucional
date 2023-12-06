import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Spinner from "./Components/Spinner/Spinner";
import "./App.css";

const Home = lazy(() => import("./Components/Home/Home"));
const Galeria = lazy(() => import("./Components/Galeria/Galeria"));
const Noticias = lazy(() => import("./Components/Noticias/Noticias"));
const Institucion = lazy(() => import("./Components/Institucion/Institucion"));
const Contacto = lazy(() => import("./Components/Contacto/Contacto"));
const RegistrationForm = lazy(() =>
  import("./Components/RegistrationForm/RegistrationForm")
);
const FormLogin = lazy(() => import("./Components/FormLogin/FormLogin"));
const SobreNosotros = lazy(() =>
  import("./Components/SobreNosotros/SobreNosotros")
);
const CajaDeComentarios = lazy(() =>
  import("./Components/CajaDeComentarios/CajaDeComentarios")
);

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content-after-header">
          <Header />
        </div>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/noticias" element={<Noticias />}>
              <Route path="Rugby-Juveniles" element={<Noticias />} />
              <Route path="Rugby-Adultos" element={<Noticias />} />
              <Route path="Hockey-Juveniles" element={<Noticias />} />
              <Route path="Hockey-Adultos" element={<Noticias />} />
            </Route>
            <Route path="/institucion" element={<Institucion />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/registro" element={<RegistrationForm />} />
            <Route path="/ingresar" element={<FormLogin />} />
            <Route path="/sobreNosotros" element={<SobreNosotros />} />
            <Route path="/cajaDeComentarios" element={<CajaDeComentarios />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
