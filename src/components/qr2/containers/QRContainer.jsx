import { useState } from "react"
import QRDisplay from "../components/QRDisplay"



function QRContainer(){
    
    const [value,setValue] = useState("https://www.linkedin.com/in/minthuta/");
    // const [qrValue,setQRValue] = useState("")
    
    const changeHandler = (e) => {
        const inputValue = e.target.value;
        setValue((prev)=>inputValue)
    }

    

    return(
        <div>
            <QRDisplay qrValue={value}/>
            <input value={value} onChange={changeHandler}></input>
        </div>
    )
}


export default QRContainer;