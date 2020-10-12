import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { obtenerDiferencia, precioMarca, precioPlan } from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  margin-top: 1.2rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const Input = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: opacity 0.3s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%auto;
  text-align: center;
`;

const Formulario = ({ guardarResumen, guardarCargando }) => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, guardarError] = useState(false);

  const { marca, year, plan } = datos;

  const obtenerInformacion = (evento) => {
    guardarDatos({
      ...datos,
      [evento.target.name]: evento.target.value,
    });
  };

  const cotizarSeguro = (evento) => {
    evento.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //Aca se va a calcular el valor del seguro
    //Precio base 2000
    let resultado = 2000;
    //Por cada año de diferencia el seguro sube 3%
    //Se calcula la diferencia de años
    const diferencia = obtenerDiferencia(year);
    resultado += (diferencia * 3 * resultado) / 100;
    //Por cada tipo de marca aumenta el seguro
    //Americano 15% - Europero 30% - Asiatico 5%
    resultado = precioMarca(marca) * resultado;
    //Dependiendo del tipo de plan sube el precio
    //Basico 20% - Completo 50%
    const incrementoPlan = precioPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    guardarCargando(true);
    setTimeout(() => {
      guardarCargando(false);
      guardarResumen({
        cotizacion: +resultado,
        datos,
      });
    }, 3000);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="0">Selecione</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Modelo</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="0">Seleccione</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Tipo de Plan</Label>
        <Input
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <Input
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Campo>
      <Button type="submit">Cotizar</Button>
    </form>
  );
};

Formulario.propTypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired,
};

export default Formulario;
