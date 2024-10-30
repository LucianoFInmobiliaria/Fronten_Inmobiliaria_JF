import { Route, Routes } from 'react-router-dom';
import { InmobiliariaProvider } from './context';
import Navbar from './componentes/Navbar';
import Home from './paginas/Home';
import Footbar from './componentes/Footbar';
import PropsVenta from './paginas/PropsVenta';
import PropsAlquiler from './paginas/PropsAlquiler';
import NosotrosPage from './paginas/Nosotros';
import Contactanos from './paginas/Contactanos';
import './App.css';

function App() {
  return (
    <InmobiliariaProvider>
      <div className="App">
        {/*--------- navbar------ */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contactanos/>} />
          <Route path='/venta' element={<PropsVenta/>} />
          <Route path='/alquiler' element={<PropsAlquiler />} />
          <Route path='/nosotros' element={<NosotrosPage/>} />
        </Routes>

        <Footbar />
      </div>
    </InmobiliariaProvider>
  );
}

export default App;

