import { useState,useEffect } from "react";
import Product from "../components/Product";

function ProductsContainer(props){
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [inventory,setInventory] = useState(0);
    const [count,setCount] = useState(0);
    const [errMsg,setErrMsg] = useState("");

    async function fetchProducts() {
        try{
            // setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${products.length}`); 
            const data = await response.json();
            console.log(1)

            if(data && data.products && data.products.length){
                // setProducts((prevData)=>[...prevData,...data.products])
                // setLoading(false);
            }
       

        } catch(e){
            // setErrMsg(`Error Message: ${errMsg.message}`)
        }
    }

    useEffect(()=>{
        fetchProducts()
    },[])


    // const productList = products && products.length ? products.map((item,index)=><Product/>) : "No products to display";
    console.log(products)
    if(loading){
        return <div>Loading. Please wait</div>
    }
    
    if(errMsg != null){
        return <div>{errMsg}</div>
    }
    
    return(
        <div>
            
            {/* {productList} */}
        </div>
    )
}

export default ProductsContainer;