import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
import Slide from '../components/Slide'
import Indicator from '../components/Indicator'
import styles from "../styles/styles.module.css"


function ImageSliderContainer(props){
    const [images,setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(9);
    const [errorMsg,setErrorMsg] = useState(null);
    const [loading,setLoading] = useState(false);


    async function fetchImages(getUrl){
        try{
            setLoading(true);
            const response = await fetch(`${props.url}?page=${props.page}&limit=${props.limit}`);
            const data = await response.json();

            if (data){
                setImages((prev)=>data);
                setLoading(false)
            }

        } catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }

    }

    function handlePrevious(){
        setCurrentSlide((prev)=>{
            if(prev == 0){
                prev = images.length - 1;
            }else{
                prev = prev -1;
            }
            return prev;
        })
    }

    function handleNext(){
        setCurrentSlide((prev)=>{
            if(prev == images.length - 1){
                prev = 0;
            }else{
                prev = prev +1;
            }
            return prev;
        })

    }

    function indicatorHandler(index){
        setCurrentSlide((prev) => index)
    }

    useEffect(()=>{
        if(props.url !== ""){
            fetchImages(props.url)
        }else{
            setLoading(true)
        }
    },[props.url]);


    if(loading){
        return<div>Loading data ! Please wait</div>
    }
    if(errorMsg != null){
        return <div>Error occured ! {errorMsg}</div>
    }

    return(
        <div className={styles.container}>
            <BsArrowLeftCircleFill onClick={handlePrevious} className={`${styles.arrow} ${styles.arrowLeft}`}/>
            {
                
                images && images.length ? images.map((item,index)=>{
        
                    return <Slide key={index} index ={index} src={item.download_url} currentslide={currentSlide}/>}) : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className={`${styles.arrow} ${styles.arrowRight}`}/>
            <span className={styles.circleIndicators}>
            {
                images && images.length ? images.map((item,index)=><Indicator indicatorHandler = {indicatorHandler}key={index} index ={index} currentslide={currentSlide}/>):null
            }
            </span>

        </div>
    )
}

export default ImageSliderContainer;