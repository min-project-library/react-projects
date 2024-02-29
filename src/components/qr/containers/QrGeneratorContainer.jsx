import { useState } from "react";
import QrGeneratorDisplay from "../components/QrGeneratorDisplay"

function QrGeneratorContainer(){
    const [input,setIntput] = useState("")
    const [qrValue,setQRValue] = useState("https://www.linkedin.com/in/minthuta/")


    const changeHandler = (e) =>{
        setIntput((prev)=>e.target.value);
    }
    const clickHandler = () =>{
        setQRValue((prev)=>input)
        setIntput((prev)=>"")
    }

    return(<QrGeneratorDisplay qrValue = {qrValue}clickHandler={clickHandler}changeHandler={changeHandler} value={input}/>)
}

export default QrGeneratorContainer;