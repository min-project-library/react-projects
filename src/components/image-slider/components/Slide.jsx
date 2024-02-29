import { BsCurrencyBitcoin } from "react-icons/bs";
import styles from "../styles/styles.module.css"
function Slide(props){
    // console.log(props.index)
    return(<img  src={props.src} currentslide={props.currentslide} index = {props.index}className={props.currentslide == props.index?styles.currentImage:`${styles.currentImage} ${styles.hide}`}></img>)
}

export default Slide;