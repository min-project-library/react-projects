import styles from "../styles/Accordian.module.css"


function Accordian(props){

    const clickHandler = (id) =>{
        
        if(props.singleSelection){
            props.setSingleSelected(id);
        }
        props.onSelect();
        
    }

    let content;
    if(props.singleSelection){
        content = <div className={styles.content}>
            {
                props.singleSelected == props.data.id && props.selected?<p>{props.data.answer}</p>:null
            }
        </div>
    }else{
        content = <div className={styles.content}>{
            props.selected ?<p>{props.data.answer}</p>:null
        }</div>
    }

    return(
        <div className={styles.accordian}>
            <div onClick={()=>clickHandler(props.data.id)} className={styles.title}>
                <h3>{props.data.question}</h3>
                <span>+</span>
            </div>
            {content}
            
        </div>
    );
}

export default Accordian;