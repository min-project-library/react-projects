import RandomColorDisplay from "../components/RandomColorDisplay";
import { useState } from "react";


function RandomColorContainer(){
    const [colorCode,setColorCode] = useState("#FF0000");
    const [type,setType] = useState("hex")

    const randomHexColor = () =>{
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColorCode = "#"
        for(let i = 0; i < 6; i++){
            hexColorCode += hex[Math.floor(Math.random() * hex.length)]
        }
        setType((prev)=>"hex")
        return hexColorCode;
    }

    const randomRGBColor = () => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const rgbColorCode = `rgb(${r},${g},${b})`
        setType((prev)=>"rgb")
        return rgbColorCode;
    }

    const handleRandomHex = () => {
        const hex = randomHexColor();
        setColorCode((prev)=>hex);
    }

    const handleRandomRGB = () => {
        const rgb = randomRGBColor();
        setColorCode((prev)=>rgb);
    }

    return(
        <div>
            <RandomColorDisplay type={type} colorCode={colorCode} handleRandomHex={handleRandomHex} handleRandomRGB = {handleRandomRGB}/>
        </div>
    )
}


export default RandomColorContainer;