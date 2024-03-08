import { useEffect, useState } from "react";
import User from "../components/User";
import styles from "../styles/githubprofilefinder.module.css"

function GithubProfileFinderContainer(){
    const [input,setIntput] = useState("thutamin")
    const [githubData,setgithubData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [errorMsg,setErrorMsg] = useState(null)
 

 

    async function fetchProfile(input){
        try{
            const response = await fetch(`https://api.github.com/users/${input}`)
            // console.log(response.status)
            if(response.status == 200){
                const data = await response.json()
                // console.log(data)
                setgithubData((prev)=>data)
            }else{
                setgithubData((prev)=>null)
            }
            
        }catch(e){
      
            console.log(e)
            setErrorMsg((prev)=>e.message)
        }
    }

    useEffect(()=>{
        fetchProfile(input)
    },[])


    const handleChange = (e) =>{
        const inputValue = e.target.value;
        setIntput((prev)=>inputValue)
    }

    const handleSubmit = (e) => {
        
        fetchProfile(input)
        
    }
    console.log(githubData)
    return(
        <div className={styles.container}>
            <h1>Github Profile Finder</h1>
            <div className={styles.inputForm}>
                <input onChange={handleChange} type="text" value={input} className={styles.input}/>
                <button type="submit" onClick={handleSubmit} className={styles.btnSubmit}>Submit</button>
            </div>
            {githubData !=null? <User userData = {githubData}/>:<h2>Username is not registered in Github</h2>
            }
            
        </div>

    )
}

export default GithubProfileFinderContainer;