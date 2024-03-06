import styles from "../styles/tabs.module.css"

function Tab(props){    
    console.log(props.currentTabIndex)
    return(
        
        <div className={`${styles.tabs} ${props.currentTabIndex == props.index ? styles.active : styles.inactive}`} onClick={()=>props.clickHandler(props.index)}>
            <span>{props.title}</span>
        </div>
    )
}

export default Tab;