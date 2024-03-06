import styles from "../styles/tabs.module.css"

function Content(props){
    console.log(props.content);
    return(
        <div className={styles.contents}>
        {props.content}
    </div>
    )

}

export default Content;