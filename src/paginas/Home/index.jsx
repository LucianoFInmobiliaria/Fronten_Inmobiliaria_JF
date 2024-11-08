import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../redux/actions';
import Loading from '../../componentes/Loading';
import LandingA from '../../componentes/LandingA';
import LandingB from '../../componentes/LandingB';
import LandingC from '../../componentes/LandingC';
import BarraLateral from '../../componentes/Barra-Lateral';
import ListaPropiedades from '../../componentes/ListaPropiedades';
import Paginacion from '../../componentes/Paginacion';
import CotizacionDolar from '../../componentes/CotizacionDolar';
import './estilos.css';

function Home() {
  const loading = useSelector(state => state.loading);
  const [operacion, setOperacion] = useState('');
  const [tipoPropiedad, setTipoPropiedad] = useState('todas');
  const [precioMin, setPrecioMin] = useState(10000);
  const [precioMax, setPrecioMax] = useState(1000000);
  const [currentPage, setCurrentPage] = useState(1);
  const allProps = useSelector(state => state.propiedades);
  const totalPropiedades = useSelector(state => state.totPropiedades);
  const dispatch = useDispatch();
  const propiedadesPorPagina = 12;
  const limit = propiedadesPorPagina;
  const offset = (currentPage - 1) * limit;

  // Efecto para manejar la paginación y los filtros
  useEffect(() => {
    dispatch(getProps(limit, offset, operacion, tipoPropiedad, precioMin, precioMax));
  }, [dispatch, limit, offset, operacion, tipoPropiedad, precioMin, precioMax]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className='home'>
          <LandingA />
          <LandingB />
          <LandingC />
          <div className='cont-barraLateral-Y-listaProps'>
            <div className='cont-barraLateral'>
              <BarraLateral
                muestraVentaAlq={'true'}
                soloAlq={'true'}
                setCurrentPage={setCurrentPage}
                setOperacion={setOperacion}
                setTipoPropiedad={setTipoPropiedad}
                precioMin={precioMin}
                setPrecioMin={setPrecioMin}
                precioMax={precioMax}
                setPrecioMax={setPrecioMax}
              />
            </div>
            <div className='cont-listaProps-Y-paginacion'>
              <h1 className='titulo-lista-props'>Conocé nuestras Propiedades</h1>
              <ListaPropiedades allProps={allProps} id='listaProps' />
              {
                  allProps[0] && (
                    <Paginacion
                      allProps={allProps}
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                      totalPropiedades={totalPropiedades}
                    />
                  )
              }
            </div>
          </div>
          <CotizacionDolar />
        </div>
      )}
    </div>
  );
}

export default Home;