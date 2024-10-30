import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    X: "opt",
    _: "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};

const Button = ({ value }) => {
    
    const { calc, setCalc } = useContext(CalcContext)
    
    // User click Comma
    const commaClick = () =>{
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }
    // User Click C
    const resetClick = () =>{
        setCalc({sign : '', num: 0, res:0})
    }
    // User click number
    const handleClickbutton = () =>{
        const numberString = value.toString();

        let numberValue;
        if(numberString === '0' && calc.num === 0){
            numberValue = "0";
        } else{
            numberValue = Number(calc.num + numberString);
        }

        setCalc({
            ...calc,
            num: numberValue
        })
    }

    const handleBtnClick = () => {
        const results = {
            '.': commaClick,
            'C': resetClick,
        }
        if(results[value]){
            return results[value]()
        } else {
            return handleClickbutton()
        }
        
    }

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
