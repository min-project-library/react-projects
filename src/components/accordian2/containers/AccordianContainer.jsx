import {useState,useCallback} from "react";
import Accordian from "../../accordian2/components/Accordian";

function AccordianContainer(props){
    const [selected,setSelected] = useState(false);
    const selectHandler = useCallback((id) => {
        
        setSelected((prev)=>!prev);
        props.setSingleSelected(id);
    },[props.setSingleSelected]);

    return(
        <Accordian key={props.id} id={props.id} question={props.question} answer={props.answer} selected={selected} selectHandler={selectHandler} singleSelected={props.singleSelected} singleSelection={props.singleSelection} setSingleSelected={props.setSingleSelected}/>
    )
}


export default AccordianContainer;