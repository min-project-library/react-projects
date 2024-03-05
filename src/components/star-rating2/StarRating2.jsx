import{useEffect, useState} from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './styles.module.css'


function StarRating2(props){
    const [selected,setSelected]= useState(0);
    const [hover,setHover] = useState(0);
    
    const handleSelection = (index) => {
        setSelected((prev)=>index)
    }

    const handleHover = (index) => {
        console.log(hover)
        setHover((prev) => index)
    }

    const handleHoverLeave = (index) => {
        setHover((prev) => selected)
    }


    const stars = [...Array(props.num)].map((_,i)=>{
        let index = i + 1;
        return <FaStar
            key={index}
            size={80}

            onMouseMove = {() => handleHover(index)}
            onMouseLeave = {() => handleHoverLeave(index)}

            onClick={() => handleSelection(index)}
            className= {(index <= selected || index <= hover)? styles.active:styles.deactive}
        />
    })
return(<div>
    {stars}
</div>)
}


export default StarRating2;