import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 200px;
  @media (max-width: 1001px) {
    width: calc(100vw * 0.2);
  }
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #202020;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;

  font-size: 24px;
  font-weight: bold;
`;
