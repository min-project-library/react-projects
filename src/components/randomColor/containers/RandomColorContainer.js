import { useState,useEffect } from "react";
import RandomColorDisplay from "../components/RandomColorDisplay"


function RandomColorContainer(){
    const [type,setType] = useState("rgb");
    const [hexColor,setHexColor] = useState("");
    const [rgbColor,setRGBColor] = useState("");


    const generateRandomHex = ()=>{
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColorCode = "#"
        for(let i = 0; i < 6;i++){
            hexColorCode += hex[Math.floor(Math.random() * hex.length)]
            
        }
        return hexColorCode;


    }

    const generateRandomRGB = ()=>{


        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const rgbColorCode = `rgb(${r},${g},${b})`
        return rgbColorCode;
    }

    const randomHex = () => {
        const hex = generateRandomHex();
        setHexColor((prev) => hex);
    }
    const randomRGB = () => {
        const rgb = generateRandomRGB();
        setRGBColor((prev) => rgb)
    }

    const randomColor = () => {
        if(type === "rgb"){
            randomRGB();
        }else{
            randomHex();
        }
    }

    useEffect(()=>{
        if(type === "rgb"){
            randomRGB();
        }else{
            randomHex();
        }
  
    },[type])

    return(<RandomColorDisplay type={type} setType={setType} hexColor={hexColor} rgbColor={rgbColor} randomColor={randomColor}/>) 

}

export default RandomColorContainer;