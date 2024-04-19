/*import Login from './components/Login';
import HomePage from './components/HomePage';
import For from './components/Formulario';

function App() {
  return (
    <> 
    <Login/>
    <HomePage/>
    <For/>
    </>
  );
}

export default App;


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import For from "./components/Formulario";

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <AuthProvider> 
        <Routes>
          <Route path='login' element={<Login/>} />
          <Route path="formulario" element={<For/>} />
          <Route path="homePage" element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;*/


import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import For from "./pages/Formulario";
import Combining from "./user/grafica";
import Layout from "./layout/Layout";
import Profile from "./user/Profile";
import Ruta from "./user/Ruta";
import Historial from "./user/Historial";
import Tiempo from "./user/Tiempo";
import Comunidad from "./user/Comunidad";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/formulario" element={<For />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/gra" element={<Combining />} />
          <Route
            path="/dash/*"
            element={
              <Layout>

                <Routes>
                  <Route index element={<Profile />} />
                  <Route path="ruta" element={< Ruta/>} />
                  <Route path="tiempo" element={<Tiempo/>} />
                  <Route path="historial" element={<Historial />} />
                  <Route path="comunidad" element={<Comunidad/>}/>
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
