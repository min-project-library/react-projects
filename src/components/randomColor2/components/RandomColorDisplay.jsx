function RandomColorDisplay(props){
    
    
    const header = props.type == "rgb"? <h1>RGB</h1> : <h1>HEX</h1>
    const styles = {
        minHeight:"100vh",
        backgroundColor:props.colorCode
    }
    return(
        <div style={styles}>
     
            <h1>{header}</h1>
            <h3>{props.colorCode}</h3>
            <button onClick={props.handleRandomHex}>Random Hex Color</button>
            <button onClick={props.handleRandomRGB}>Random RGB Color</button>
        </div>
    )
}

export default RandomColorDisplay;