// import { useState } from 'react'
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

const BtnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "_"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <>
      <div className="h1">
        <h1>Calculator App</h1>
      </div>
      <CalcProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {BtnValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcProvider>
    </>
  );
}

export default App;
