
import QRCode from "react-qr-code";




function QrGeneratorDisplay(props){
    return(

        <div>
            <h1>QR Code Generator</h1>
            <div>
            <QRCode value={props.qrValue}/>
            </div>
            
            <input placeHolder="Enter your value"onChange={props.changeHandler} value={props.value}></input><br/>
            <button onClick={props.clickHandler}>Submit</button>
        </div>
    )
}

export default QrGeneratorDisplay;