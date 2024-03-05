
import styles from "../styles/styles.module.css"
function Slide(props){

    return(
        <img src={props.src} className={props.currentSlide == props.index?styles.currentImage:`${styles.currentImage} ${styles.hide}`}/>
    )
}

export default Slide;