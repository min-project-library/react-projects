import { useEffect,useState } from "react";
import Slide from "../components/Slide";
import Indicator from "../components/Indicator";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs';
import styles from "../styles/styles.module.css"



function ImageSliderContainer(props){
    const [loading,setLoading] = useState(false);
    const [images,setImages] = useState([]);
    const [errorMsg,setErrorMsg] = useState(null)
    const [currentSlide,setCurrentSlide] = useState(0);

    const handlePrev= ()=>{
        setCurrentSlide((prev)=>{
            if(prev ==0){
                return images.length -1;
            }else{
                return prev -1;
            }
        })
    }
    const handleNext = () =>{
        setCurrentSlide((prev)=>{
            if(prev == images.length - 1){
                return 0
            }else{
                return prev + 1;
            }
        })
    }

    const handleIndicator = (index) => {
        setCurrentSlide((prev)=> index)
    }

    async function fetchImages(url){
        try{
            setLoading(true);
            const response = await fetch(`${url}?page=${props.page}&limit=${props.limit}`)
            const data = await response.json();

            if(data){
                console.log("data" + JSON.stringify(data) )
                setImages((prev)=> data);
                setLoading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(props.url != ""){
            fetchImages(props.url)
        }else{
            setLoading((prev)=>true)
        }
    },[props.url])


    const slides = images && images.length? images.map((item,index)=><Slide key={index} index ={index} currentSlide={currentSlide} src={item.download_url}/>): null;
    const indicators = images && images.length? images.map((item,index)=><Indicator key={index} index ={index} currentSlide={currentSlide} indicatorHandler = {handleIndicator}/>): null;
    if(loading){
        return <div>Loading data! Please wait</div>
    }
    if(errorMsg != null){
        return <div>Error occured! {errorMsg}</div>
    }

    return(
        <div className={styles.container}>
            <BsArrowLeftCircleFill onClick={handlePrev} className={`${styles.arrow} ${styles.arrowLeft}`}/>
            {slides}
            <BsArrowRightCircleFill onClick={handleNext} className={`${styles.arrow} ${styles.arrowRight}`}/>
            <span className={styles.circleIndicators}>
            
            {indicators}
            </span>
        </div>
    )
}

export default ImageSliderContainer;