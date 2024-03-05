import { useEffect,useState } from "react";

function useLocalStorage(key,defaultValue){
    // this useState is only triggered once upon component mount
    const [value,setValue] = useState(()=>{ // the function checks if the value stored in the local storage, if there is not data associated with the key. the value is assigned with default value.
        let currentValue; // the value to be returned
        console.log("helo")
        try{
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue))
        }catch(e){
            console.log(e);
            currentValue = defaultValue;
        }
        return currentValue;
    })

    useEffect(()=>{
        console.log("Running use Effect: "  +value)
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    return [value,setValue]
}


export default useLocalStorage;