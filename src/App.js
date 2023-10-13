import { Container, Content, Row } from "./styles.general";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [currentNumber, setCurrentNumber] = useState("0");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev == 0 ? "" : prev}${number}`);
  };

  const handleClear = () => {
    setCurrentNumber("0");
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button
            internalText={"C"}
            onClick={() => {
              handleClear();
            }}
          />
          <Button
            internalText={"*"}
            onClick={() => {
              handleAddNumber("*");
            }}
          />
          <Button
            internalText={"/"}
            onClick={() => {
              handleAddNumber("/");
            }}
          />
          <Button
            internalText={"-"}
            onClick={() => {
              handleAddNumber("-");
            }}
          />
          <Button
            internalText={1}
            onClick={() => {
              handleAddNumber("1");
            }}
          />
          <Button
            internalText={2}
            onClick={() => {
              handleAddNumber("2");
            }}
          />
          <Button
            internalText={3}
            onClick={() => {
              handleAddNumber("3");
            }}
          />
          <Button
            internalText={"+"}
            onClick={() => {
              handleAddNumber("+");
            }}
          />
          <Button
            internalText={4}
            onClick={() => {
              handleAddNumber("4");
            }}
          />
          <Button
            internalText={5}
            onClick={() => {
              handleAddNumber("5");
            }}
          />
          <Button
            internalText={6}
            onClick={() => {
              handleAddNumber("6");
            }}
          />
          <Button
            internalText={"X"}
            onClick={() => {
              handleAddNumber("X");
            }}
          />
          <Button
            internalText={7}
            onClick={() => {
              handleAddNumber("7");
            }}
          />
          <Button
            internalText={8}
            onClick={() => {
              handleAddNumber("8");
            }}
          />
          <Button
            internalText={9}
            onClick={() => {
              handleAddNumber("9");
            }}
          />
          <Button
            internalText={"="}
            onClick={() => {
              handleAddNumber("=");
            }}
          />
        </Row>
        <Row className="btn-0">
          <Button
            internalText={"0"}
            onClick={() => {
              handleAddNumber("0");
            }}
          />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
