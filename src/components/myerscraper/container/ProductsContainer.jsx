import { useEffect, useState } from "react";
import Product from "../components/Product";
import styles from "../styles/LoadMore.module.css"

function ProductContainer(){
    const [inputValue,setInputValue] = useState("banana")
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState(null);
    const [total,setTotal] = useState(0);
    const [zeroItem,setZeroItem] = useState(null);

    async function fetchProducts(){
        try{
            setLoading(true)

            const requestOptions = {
                method: 'POST',
                body: `searchKeyword=${inputValue}`,
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
            
                },
              
                
              };
            const response = await fetch("https://myer-search-scraper-a361fa87b176.herokuapp.com/searchScrape", requestOptions)
            console.log("Response"+response)
            if(response.status == 200){
                const data = await response.json();
                if(data){
                    console.log(data)
                    // console.log("data"+JSON.stringify(data.products))
         
                    setProducts((prev)=> [...data]);
                   
             
                }

            }else{
                const data = await response.json();
                setProducts((prev)=> []);
                setZeroItem(data.error)
                   
            }
            setLoading(false)


        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        const inputValue = e.target.value
        setInputValue((prev)=>inputValue)
    }
    const handleClick = () => {
        fetchProducts()
    }

    useEffect(()=>{
        console.log("running use effect")
        fetchProducts();
    },
    [])


    const productList = products && products.length? products.map((item,index) => <Product key={index} src={item.image} price={item.price} name={item.name} brand={item.brand}/>):null;
    
    // if(loading){
    //     return<div>Loading data ! Please wait</div>
    // }
    return(
    
    
    <div className={styles.container}>
        <div>
            <input className={styles.textField} onChange={handleChange} type="text" value={inputValue}></input>
            <button className={styles.btn} onClick={handleClick}>Search</button>
        </div>
        
       <div className={styles.productContainer}>
        {loading?<div className={styles.loading}>Scraping data ! Please wait</div>:productList?productList:<div className={styles.zeroItem}>{zeroItem}</div>}
        
       </div>
       
        
    </div>)
}

export default ProductContainer;