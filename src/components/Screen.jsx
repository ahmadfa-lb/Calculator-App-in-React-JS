// import { useContext } from "react";
// import { CalcContext } from "../context/CalcContext";
// // import { Textfit } from "react-textfit";
// import { TextareaAutosize } from "react-textarea-autosize"

// const Screen = () => {
//   const { calc } = useContext(CalcContext);

//   return (
//     // <Textfit className="screen" max={70} mode="single">
//     //   {calc.num ? calc.num : calc.res}
//     // </Textfit>
//   );
// };

// export default Screen;

// import { useContext } from "react";
// import { CalcContext } from "../context/CalcContext";
// import TextareaAutosize from 'react-textarea-autosize';

// const Screen = () => {
//   const { calc } = useContext(CalcContext);

//   return (
//     <TextareaAutosize
//       className="screen"
//       minRows={1} // Minimum number of rows
//       maxRows={3} // Maximum number of rows
//       value={calc.num ? calc.num : calc.res} // Display calc.num or calc.res
//       readOnly // Make it read-only if you want to prevent user input
//       style={{ width: "100%", fontSize: "2rem", resize: "none", overflow: "hidden" }} // Adjust styles as needed
//     />
//   );
// };

// export default Screen;

import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import TextareaAutosize from "react-textarea-autosize";

const Screen = () => {
  const { calc } = useContext(CalcContext);
  
  return (
    <TextareaAutosize
      className="screen"
      minRows={1} // Minimum rows for the textarea
      maxRows={3} // Maximum rows for the textarea
      value={calc.num ? calc.num : calc.res} // Display the current number or result
      readOnly // Make it read-only to prevent editing
      style={{
        width: '100%', // Make it full width
        resize: 'none', // Prevent manual resizing
        fontSize: '24px', // Set a base font size
        textAlign: 'left', // Align text to the left
        padding: '10px', // Add some padding
        border: 'none', // Remove border
        outline: 'none', // Remove outline
        overflow: 'hidden', // Hide overflow
      }}
    />
  );
};



export default Screen;
