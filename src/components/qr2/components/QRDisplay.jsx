import QRCode from "react-qr-code";
function QRDisplay(props){
    return(
        <div>
            <QRCode value={props.qrValue}/>
        </div>
    )
}

export default QRDisplay;