// import { useState } from 'react'
import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const BtnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "_"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {
  

  return (
    <div>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {BtnValues.flat().map((btn, i) => (
            <Button 
              value={btn}
              key={i}
            />
          ))}   
        </ButtonBox>        
      </Wrapper>
    </div>
  )
}

export default App
