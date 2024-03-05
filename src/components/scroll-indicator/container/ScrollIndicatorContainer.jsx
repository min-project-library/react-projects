import { useEffect, useState } from "react";
import styles from "../styles/ScrollIndicator.module.css"

function ScrollIndicatorContainer(props){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState(null);
    const [scrollPercentage,setScrollPercentage] = useState(0);

    async function fetchProducts(){
        try{
            setLoading(true)
            const response = await fetch("https://dummyjson.com/products?limit=100")
            const data = await response.json()
            // console.log(JSON.stringify(data.products))
            if(data){
                setLoading(false);
                setProducts((prev)=>[...prev,...data.products])
            }

        }catch(e){
            setLoading(false)
            setErrorMsg(e.message)
            console.log(e)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    function handleScrollPercentage(){
        // console.log(document.body.scrollTop,document.documentElement.scrollTop,document.documentElement.scrollHeight,document.documentElement.clientHeight);
        //document.body.scrollTop - retrieves the number of pixels that the document's body has been scrolled vertically from the top.
        //document.documentElement.scrollTop - retrieves the number of pixels that the entire document (including any off-screen content) has been scrolled vertically from the top
        //document.documentElement.scrollHeight - retrieves the total height of the entire document, including any content that may not be currently visible on the screen due to scrolling
        //document.documentElement.clientHeight - retrieves the height of the browser window's viewport, excluding any toolbars or scrollbars. It represents the visible portion of the document within the browser window.
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        // console.log(scrolled,height)

        const scrolledPercentage = Math.floor((scrolled/height) * 100)
 
        setScrollPercentage((prev)=>scrolledPercentage);
        console.log(scrollPercentage)
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScrollPercentage)
        return() =>{
            window.removeEventListener("scroll",()=>{})
        }
    })

    if(loading){
        return <div>Loading data! Please wait</div>
    }
    if(errorMsg != null){
        return <div>Error! {errorMsg}</div>
    }

    const productsLists = products && products.length ? products.map((item,index)=><p>{item.title}</p>):null;
    return(
        <div>
            <div className={styles.container}>
                <h1>Scroll Indicator</h1>
                <div className={styles.scrollProgressTracking}>
                    <div className={styles.currentProgress} style={{width:`${scrollPercentage}%`}}>

                    </div>
                </div>
            </div>
            <div className="data-container">
            {productsLists}
            </div>

        </div>
    )

}


export default ScrollIndicatorContainer