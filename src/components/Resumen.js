import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { primerMayuscula } from "../helper";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Li = styled.li`
  margin-bottom: 0.5rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <Li>Marca: {primerMayuscula(marca)}</Li>
        <Li>Plan: {primerMayuscula(plan)}</Li>
        <Li>Año del auto: {year}</Li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
