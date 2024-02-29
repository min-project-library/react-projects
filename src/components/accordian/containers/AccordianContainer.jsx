import Accordian from "../components/Accordian";
import { useState } from "react";


function AccordianContainer(props){
    const [selected,setSelected] = useState(false);
    const selectHandler = () => {
        setSelected((prev) => !prev);
    }

    return(
        <Accordian onSelect= {selectHandler} data = {props.data} selected={selected} singleSelection = {props.singleSelection} singleSelected = {props.singleSelected} setSingleSelected = {props.setSingleSelected}/>

    )


}


export default AccordianContainer;