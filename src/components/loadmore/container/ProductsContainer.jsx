import { useEffect, useState } from "react";
import Product from "../components/Product";
import styles from "../styles/LoadMore.module.css"

function ProductContainer(){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [errorMsg,setErrorMsg] = useState(null);
    const [total,setTotal] = useState(0)

    async function fetchProducts(){
        try{
            // setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${products.length}`);

            const data = await response.json();

            if(data){
                // console.log(data)
                // console.log("data"+JSON.stringify(data.products))
                setTotal(data.total)
                setProducts((prev)=> [...prev,...data.products]);
                // setLoading(false)
         
            }

        }catch(e){
            setErrorMsg(e.message)
            setLoading(false)
        }
    }


    const handleLoadMore = () => {
        fetchProducts();
    }
    useEffect(()=>{
        console.log("running use effect")
        fetchProducts();
    
    },
    [])


    const productList = products && products.length? products.map((item,index) => <Product key={index} title={item.title} thumbnail={item.thumbnail}/>):null;

    return(
    <div className={styles.container}>
      
       <div className={styles.productContainer}>
       {productList}
       </div>
        {
            products.length == total?null:<button onClick={handleLoadMore} className={styles.btn}>Load More</button>
        }
        
    </div>)
}

export default ProductContainer;