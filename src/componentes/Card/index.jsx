import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { formatMoney } from '../../Helps';
import Favorito from '../Favoritos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconoSup from '../../imagenes/Iconos/IconoSup';
import IconoAmb from '../../imagenes/Iconos/IconoAmb';
import IconoDormitorio from '../../imagenes/Iconos/IconoDormitorios';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './styles.css'

function Card({ 
    id, 
    tituloPublicacion,
    ubicacion,
    operacion,
    imagenes,
    cantCocheras,
    ambientes, 
    dormitorios, 
    unidadMedida, 
    tipoPropiedad 
}) {

    //estado para el hover
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className='contCard'>
            {/* titulo */}
            <div className='card-title'>
                <h2 className='titulo-card'>{operacion[0].tipoOperacion}</h2>
            </div>

            {/* img + animacion + abre detalle */}
            <NavLink to={`/detalle/${id}`} className='navLink-car'>
                <div
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}
                >
                    {/* imagen */}
                    <div className='card-image'>
                        <img src={imagenes[0]} alt='not found' className='card-img' />
                    </div>

                    {/* msj detalle si hay hover */}
                    <div className={`detail ${showDetail ? 'show' : ''}`}>
                        <p className='palabra-abre-detalle'>Detalle</p>
                    </div>
                </div>
            </NavLink>

            {/* Titulo - direcc -  */}
            <div className='card-info1'>
                <div className='cont-titulo-publicacion'>
                    <span className='tituloPublicacion'>{tituloPublicacion}</span>
                </div>
                <div className='cont-info1'>
                    <LocationOnIcon />
                    <span className='direccion-card'>
                        {ubicacion.direccionPublicacion}
                    </span>
                </div>

                <div className='cont-precio-fav'>
                    <div className='cont-precio'>
                        <p className='precio'>
                            {operacion[0].moneda} {formatMoney(operacion[0].precio)}
                        </p>
                    </div>
                    <div className='cont-fav'>
                        <Favorito 
                            id={id}
                            direccionF={ubicacion.direccionPublicacion}
                            cantCocheras={cantCocheras}
                            operacion={operacion}
                            imagenes={imagenes}
                            tituloPublicacion={tituloPublicacion}
                            ambientes={ambientes}
                            dormitorios={dormitorios}
                            unidadMedida={unidadMedida}
                            tipo={tipoPropiedad}
                        />
                    </div>
                </div>
            </div>
            
            {/* info 2 */}
            <div className='card-info2'>
                <div className='div-info2'>
                    <IconoSup />                    
                    <p className='info2'>Superficie</p>
                    <p className='info2'>{unidadMedida}</p>
                </div>

                {
                    tipoPropiedad !== "Terreno" 
                    && tipoPropiedad !== "Local"
                    && tipoPropiedad !== "Cochera"
                    && tipoPropiedad !== "Quinta"
                    && tipoPropiedad !== "Campo" ? 
                    (
                        <>
                            <div className='div-info2'>
                                <IconoAmb />
                                <p className='info2'>Ambientes</p>
                                <p className='info2'>{ambientes}</p>
                            </div>

                            <div className='div-info2'>
                                <IconoDormitorio />
                                <p className='info2'>Dormitorios</p>
                                <p className='info2'>{dormitorios}</p>
                            </div>

                            <div className='div-info2'>
                                <DirectionsCarIcon sx={{ color: 'rgba(171, 132, 94, 1)', width: '28px', height: '28px' }} />
                                <p className='info2'>Cocheras</p>
                                <p className='info2'>{cantCocheras}</p>
                            </div>
                        </>
                    ) : (
                        <></>
                    )
                }
            </div>
        </div>
    )
}

export default Card;
