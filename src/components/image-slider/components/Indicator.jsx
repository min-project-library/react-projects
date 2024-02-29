import styles from "../styles/styles.module.css"
function Indicator(props){
    return(
            <button onClick={()=>props.indicatorHandler(props.index)} className={props.currentslide == props.index?styles.currentIndicator:`${styles.currentIndicator} ${styles.inactiveIndicator}`}></button>
        )
}

export default Indicator;
