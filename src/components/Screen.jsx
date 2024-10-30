import { useContext } from "react";
import CalcContext from "../context/CalcContext";

const Screen = () => {
    
    const { calc } = useContext(CalcContext)
    
    return (
        <div className="screen">1424124214124</div>
    )
}

export default Screen;