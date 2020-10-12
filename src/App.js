import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 1.5rem;
`;

const ContenedorFormulario = styled.div`
  background-color: #ffffff;
  padding: 2rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    marca: "",
    year: "",
    plan: "",
  });
  const [cargando, guardarCargando] = useState(false);
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        {datos ? <Resumen datos={datos} /> : null}
        {!cargando ? <Resultado cotizacion={cotizacion} /> : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
