import React, { useState, useEffect } from 'react';
import validacionProductos from './Productos_Val'; // Asegúrate de que la ruta sea correcta
import './Productos.css'; // Asegúrate de importar tu archivo CSS

import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarProductos = async () => {
    try {
      const productosObtenidos = await validacionProductos();
      console.log("Productos obtenidos:", productosObtenidos);
      const productosAplanados = productosObtenidos.flat();
      setProductos(productosAplanados);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <>
      <div>
        <Menu/>
      </div>
      <h1 id="tituloProductos">Productos</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div id="expoProductos">
          {productos.length > 0 ? (
            productos.map((producto) => (
              <div key={producto.ID_Producto} className="cartasProductos">
                <h2 className="descripcionProductos">{producto.Descripcion}</h2>
                <p className="precioProductos">Precio: {producto.Precio}</p>

                <button className='botonProductos'onClick={null}>🛒</button>
              </div>
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      )}
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Productos;