
import styles from "../styles/RandomColor.modules.css"

function RandomColorDisplay(props){

    const hexHandler = () =>{
        props.setType("hex")
    };
    const rgbHandler = () => {
        props.setType("rgb")
    }
    const color= {
        minHeight:"100vh",
        backgroundColor: props.type == "hex"? props.hexColor: props.rgbColor
    }

    return(
        <div style={color}>
            <div>
                {props.type == 'hex'?<h1>Hex</h1>:<h1>RGB</h1>}
      
            </div>
            <div>
            {props.type == 'hex'?<h2>{props.hexColor}</h2>:<h2>{props.rgbColor}</h2>}
            </div>


            <button className={styles.button} onClick={hexHandler}>Random Hex Color</button>
            <button className={styles.button} onClick={rgbHandler}>Random RGB Color</button>
            <button className={styles.button} onClick={()=>{props.randomColor()}}>Random  Color</button>
  
            
        </div>
    )
}

export default RandomColorDisplay;