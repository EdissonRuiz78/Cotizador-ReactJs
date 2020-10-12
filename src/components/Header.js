import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenerdorHeader = styled.header`
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const Textoh1 = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px";
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <ContenerdorHeader>
      <Textoh1>{titulo}</Textoh1>
    </ContenerdorHeader>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
