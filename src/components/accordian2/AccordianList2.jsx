import AccordianContainer from "./containers/AccordianContainer";
import accordianData from "./data";
import { useState } from "react";
import styles from "./styles/Accordian.module.css"


function AccordianList2(){
    
    
    const [singleSelected,setSingleSelected] = useState(null);
    const [singleSelection,setSingleSelection] = useState(false);


    const accordianList = accordianData.map((item,i) => <AccordianContainer key={item.id} id={item.id} question={item.question} answer={item.answer} singleSelected={singleSelected} singleSelection={singleSelection} setSingleSelected={setSingleSelected}/>)

    const clickHandler = () =>{
        setSingleSelection((prev)=>!prev)
        console.log(singleSelection)
    }
    
    return(
        <div className={styles.wrapper}>
            {accordianList.length > 0 ? accordianList:<div>No data found!</div>}
            <button className={styles.button} onClick={clickHandler}>Single Selection</button>
        </div>
        

    )
}

export default AccordianList2