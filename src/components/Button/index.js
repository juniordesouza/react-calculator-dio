import React from "react";
import { ButtonContainer } from "./styles";

const Button = ({ internalText, onClick }) => {
  return <ButtonContainer onClick={onClick}>{internalText}</ButtonContainer>;
};

export default Button;
