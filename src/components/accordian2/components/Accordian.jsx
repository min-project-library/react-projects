import styles from "../styles/Accordian.module.css"


function Accordian(props){
    // console.log(props.id)
    const clickHandler = (id) =>{
        console.log(id)


        props.selectHandler(id);
    }

    let answer

    if(props.singleSelection){
        
        answer = <div className={styles.content}>{props.selected && props.id == props.singleSelected?<p>{props.answer}</p>:null}</div>
    }else{
       answer = <div className={styles.content}>{props.selected?<p>{props.answer}</p>:null}</div>

    }


    return(
        <div className={styles.accordian}>
            <div onClick={()=>clickHandler(props.id)} className={styles.title}>
                <h3>{props.question}</h3>
                <span>+</span>
            </div>
            {answer}
        </div>
 
    )
}

export default Accordian