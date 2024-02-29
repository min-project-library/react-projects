import accordianData from "./data";
import AccordianContainer from "./containers/AccordianContainer"
import { useState } from "react";
import styles from "./styles/Accordian.module.css"


function AccordianList(){
    

    const [singleSelection,setSingleSelection] = useState(false)
    const [singleSelected,setSingleSelected] = useState(null); 

    const clickHandler = () => {
        setSingleSelected((prev)=>null)
        setSingleSelection((prev) => {
            return !prev;
        })
        
        
    }

    const accordianList = accordianData.map((item) => <AccordianContainer key= {item.id} data={item} singleSelection = {singleSelection} singleSelected = {singleSelected} setSingleSelected = {setSingleSelected}/>)

    return(
    <div className={styles.wrapper}>
        {
            accordianList.length > 0 ? accordianList : <div>No data found!</div>
        }
        <button className={styles.button} onClick={clickHandler}>Single Selection</button>

    </div>);
}

export default AccordianList;