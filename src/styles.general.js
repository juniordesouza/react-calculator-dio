import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #242424;
  color: white;
`;

export const Content = styled.div`
  width: 80%;
  max-width: 800px;
  min-height: 350px;

  background: #f5f5f5;
  color: black;
`;

export const Row = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  && .btn-equal {
    height: 200px;
    background: blue;
    color: blue !important;

    && button {
      color: red;
      width: 100%;
    }
  }

  &&.btn-0 {
    width: 100%;
    display: block;

    && button {
      width: 100%;
    }
  }
`;
