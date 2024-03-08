import { useState } from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import styles from "../styles/Weather.module.css"

function WeatherContainer(){
    const [location,setLocation] = useState("sydney");
    const [weatherData,setWeatherData] = useState(null);
    const [loading,setLoading] = useState(false)
    const [errMsg,setErrMsg] = useState(null)


    async function fetchWeather(){
        try{
            setLoading(true)
            const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bfe773a15640c170e080f6857bd5dfb9`)
            if (response.status == 200){
                const data = await response.json()
                console.log(data)
                setWeatherData((prev) => data)
            }else{
                setWeatherData((prev) => null)
            }
            setLoading(false)
                
        }catch(e){
            setLoading(false)
            setErrMsg(e.message)
            console.log(e)

        }
    }

    const handleChange = (e) => {
        const inputValue = e.target.value;
        
        setLocation((prev)=>inputValue)
    }

    const handleClick = () => {
        fetchWeather()
    }

    useState(()=>{
        fetchWeather()
    },[])

    

    return(
        <div >
            <div>
            <input className={styles.doodleInput} onChange={handleChange} type="text" value={location}></input>
    <button className={styles.doodleBtn} onClick={handleClick}>&#x1F50D;</button>
            </div>
            <div>
                {loading? <p className={styles.text}>Loading Data!</p>:weatherData == null?<p className={styles.text}>Weather data for "{location}" cannot be retrieved at the moment.</p>:<WeatherDisplay weatherData = {weatherData}/>}
            </div>

        </div>
    
    )

}

export default WeatherContainer;