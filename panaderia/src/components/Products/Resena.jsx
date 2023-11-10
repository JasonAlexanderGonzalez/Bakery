import React, { useState, useEffect } from "react";
import "./Resena.css";
import "./BotonComprar.css";
import "./Modal.css";
import axios from "axios";
import dalivium from "../../images/dalivium.jpg";
import zinc from "../../images/zinc.jpg";
import cataflan from "../../images/cataflan.jpg";
import aceite from "../../images/aceite.jpg";
import neutrogena from "../../images/neutrogena.webp";
import acierto from "../../images/acierto.jpg";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import Modal from "react-modal";



Modal.setAppElement("#root");

const Resena = () => {

  // Estado para el socket
  
  const colonSymbol = "\u20A1";
  const [platillos, setPlatillos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {

    


    // Hacer una solicitud al servidor para obtener los precios desde la tabla "precios"
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/precios`)
      .then((response) => {
        setPlatillos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los precios:", error);
      });

    // Nueva ruta para obtener la cantidad de cada ID desde la tabla "cantidades"
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/cantidades/finales`)
      .then((response) => {
        const cantidadData = {};
        response.data.forEach((item) => {
          cantidadData[item.id] = item.cantidad;
        });
        setCantidades(cantidadData);
      })
      .catch((error) => {
        console.error("Error al obtener las cantidades:", error);
      });
  }, []);

  const aumentarCantidad = (platilloId) => {
    setCantidades((prevState) => ({
      ...prevState,
      [platilloId]: (prevState[platilloId] || 0) + 1,
    }));
  };

  const reducirCantidad = (platilloId) => {
    if (cantidades[platilloId] > 0) {
      setCantidades((prevState) => ({
        ...prevState,
        [platilloId]: prevState[platilloId] - 1,
      }));
    }
  };



  return (
    <div className="resena-container">
      <h2>Productos Disponibles</h2>
      <div className="platillo-wrapper">
        {/* Platillo 1 */}
        <div className="platillo-item" key="acierto">
          <img src={acierto} alt="Kuro Kare" />
          {platillos.length > 0 && (
            <div className="precio">
              <span className="precio">
                {colonSymbol}
                {platillos[0].costo}
              </span>
              <span className="precio-antiguo">
                {colonSymbol}
                {platillos[0].costo}
              </span>
            </div>
          )}
          <div className="cantidad-container">
            <div className="cantidad-title">Cantidad</div>
            <button onClick={() => reducirCantidad("acierto")}>-</button>
            <div className="cantidad">{cantidades["acierto"] || 0}</div>
            <button onClick={() => aumentarCantidad("acierto")}>+</button>
          </div>
          <div className="agotado">Disponible</div>
          <br />
          <button onClick={() => setModalIsOpen(true)} className="boton-comprar">
            <span className="icono-carrito">
              <FaShoppingCart />
            </span>{" "}
            Comprar
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            {/* Contenido del modal */}
            <div className="modal-content">
              <div className="modal-image">
                <img src={acierto} alt="Filadelfia Roll" />
              </div>
              <div className="modal-details">
                <h1 className="producto-titulo">
                  DALIVIUM 25 MG SOBRES BEBIBLES VIA ORAL
                </h1>
                {platillos.length > 1 && (
                  <div className="precio">
                    Precio {colonSymbol}
                    {platillos[1].costo}
                  </div>
                )}
                <div className="cantidad-container">
                  <div className="cantidad-title">Cantidad</div>
                  <button onClick={() => reducirCantidad("acierto")}>-</button>
                  <div className="cantidad">{cantidades["acierto"] || 0}</div>
                  <button onClick={() => aumentarCantidad("acierto")}>+</button>
                </div>
                <div className="agotado">Disponible</div>
                <br />
                <div className="botones-container">
                  <button
                    onClick={() => console.log("Agregar al carrito")}
                    className="boton-agregar-carrito"
                  >
                    <span className="icono-carrito">
                      <FaShoppingCart />
                    </span>{" "}
                    Agregar al carrito
                  </button>
                  <button
                    onClick={() => console.log("Comprar acierto")}
                    className="boton-comprar"
                  >
                    <span className="icono-compra">
                      <FaShoppingBag />
                    </span>{" "}
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>

        {/* Platillo 2 */}
        <div className="platillo-item" key="dalivium">
          <img src={dalivium} alt="Filadelfia Roll" />
          {platillos.length > 1 && (
            <div className="precio">
              {colonSymbol}
              {platillos[1].costo}
            </div>
          )}
          <div className="cantidad-container">
            <div className="cantidad-title">Cantidad</div>
            <button onClick={() => reducirCantidad("dalivium")}>-</button>
            <div className="cantidad">{cantidades["dalivium"] || 0}</div>
            <button onClick={() => aumentarCantidad("dalivium")}>+</button>
          </div>
          <div className="agotado">Disponible</div>
          <br />
          <button
            onClick={() => console.log("Comprar dalivium")}
            className="boton-comprar"
          >
            <span className="icono-carrito">
              <FaShoppingCart />
            </span>{" "}
            Comprar
          </button>
        </div>

        {/* Platillo 3 */}
        <div className="platillo-item" key="cataflan">
          <img src={cataflan} alt="Filadelfia Roll" />
          {platillos.length > 2 && (
            <div className="precio">
              {colonSymbol}
              {platillos[2].costo}
            </div>
          )}
          <div className="cantidad-container">
            <div className="cantidad-title">Cantidad</div>
            <button onClick={() => reducirCantidad("cataflan")}>-</button>
            <div className="cantidad">{cantidades["cataflan"] || 0}</div>
            <button onClick={() => aumentarCantidad("cataflan")}>+</button>
          </div>
          <div className="agotado">Disponible</div>
          <br />
          <button
            onClick={() => console.log("Comprar cataflan")}
            className="boton-comprar"
          >
            <span className="icono-carrito">
              <FaShoppingCart />
            </span>{" "}
            Comprar
          </button>
        </div>

        {/* Platillo 4 */}
        <div className="platillo-item" key="aceite">
          <img src={aceite} alt="Filadelfia Roll" />
          {platillos.length > 3 && (
            <div className="precio">
              {colonSymbol}
              {platillos[3].costo}
            </div>
          )}
          <div className="cantidad-container">
            <div className="cantidad-title">Cantidad</div>
            <button onClick={() => reducirCantidad("aceite")}>-</button>
            <div className="cantidad">{cantidades["aceite"] || 0}</div>
            <button onClick={() => aumentarCantidad("aceite")}>+</button>
          </div>
          <div className="agotado">Disponible</div>
          <br />
          <button
            onClick={() => console.log("Comprar aceite")}
            className="boton-comprar"
          >
            <span className="icono-carrito">
              <FaShoppingCart />
            </span>{" "}
            Comprar
          </button>
        </div>

        {/* Platillo 5 */}
        <div className="platillo-item" key="neutrogena">
          <img src={neutrogena} alt="Filadelfia Roll" />
          {platillos.length > 4 && (
            <div className="precio">
              {colonSymbol}
              {platillos[4].costo}
            </div>
          )}
          <div className="cantidad-container">
            <div className="cantidad-title">Cantidad</div>
            <button onClick={() => reducirCantidad("neutrogena")}>-</button>
            <div className="cantidad">{cantidades["neutrogena"] || 0}</div>
            <button onClick={() => aumentarCantidad("neutrogena")}>+</button>
          </div>
          <div className="agotado">Disponible</div>
          <br />
          <button
            onClick={() => console.log("Comprar neutrogena")}
            className="boton-comprar"
          >
            <span className="icono-carrito">
              <FaShoppingCart />
            </span>{" "}
            Comprar
          </button>
        </div>

        {/* Platillo 6 */}
        <div className="platillo-item" key="zinc">
          <img src={zinc} alt="Filadelfia Roll" />
          {platillos.length > 5 && (
            <div className="precio">
              {colonSymbol}
              {platillos[5].costo}
            </div>
          )}
          <div className="cantidad-container">
            <div className="cantidad-title">Cantidad</div>
            <button onClick={() => reducirCantidad("zinc")}>-</button>
            <div className="cantidad">{cantidades["zinc"] || 0}</div>
            <button onClick={() => aumentarCantidad("zinc")}>+</button>
          </div>
          <div className="agotado">Disponible</div>
          <br />
          <button
            onClick={() => console.log("Comprar zinc")}
            className="boton-comprar"
          >
            <span className="icono-carrito">
              <FaShoppingCart />
            </span>{" "}
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resena;
