import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import styles from './styles.module.css'



function StarRating(props){
    const [selected,setSelected] = useState(0)
    const [hover,setHover] = useState(0)
    const handleSelection = (index) => {
        console.log(index)
        setSelected((prev)=>index)
    }
    const handleHoverMove = (index) => {
        console.log(index)
        setHover((prev)=>index)
    }

    const handleHoverLeave = (index) =>{
        setHover((prev)=>selected)
    }

    const stars = [...Array(props.num)].map((_,index) => {
        index = index + 1
        return <FaStar
        key={index}
        size={60}
        onClick={()=>handleSelection(index)}
        onMouseMove={()=>handleHoverMove(index)}
        onMouseLeave={()=>handleHoverLeave(index)}
        className = {index <= (selected || hover)? styles.active : styles.deactive}

        />
    })
    return(
        <div>
           {stars}
        </div>
    )
}


export default StarRating;