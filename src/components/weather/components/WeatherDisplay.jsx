import weathericons from "./weathericon";
import ReactAnimatedWeather from 'react-animated-weather';
import styles from "../styles/Weather.module.css"



function WeatherDisplay(props){
    
    const fahrenheitToCelsius = (degree) => {
        return Math.floor(degree - 273.15)
    }

    let weatherCode = props.weatherData.weather[0].id

    console.log(weatherCode)
    

    let weatherAnimation;
    let weatherIcon;
    if(weatherCode == 800){
        weatherIcon = "CLEAR_DAY"
    }else{
        weatherCode = Math.floor(weatherCode/100)
        weatherIcon = weathericons[weatherCode]
    }
    

    weatherAnimation = <ReactAnimatedWeather icon={weatherIcon} color={"white"} size={200} animate={true}/>

    return(
        <div>
    <div className={`${styles.component} ${styles.text}`}>{props.weatherData.name}</div>
    <div className={`${styles.component} ${styles.text}`}>{weatherAnimation}</div>
    
    <div className={`${styles.component} ${styles.text}`}>Temperature: {fahrenheitToCelsius(props.weatherData.main.temp)}°C</div>
    <div className={`${styles.component} ${styles.text}`}>{props.weatherData.weather[0].description}</div>
    <div className={`${styles.component} ${styles.text}`}>Wind: {props.weatherData.wind.speed} km/h</div>
    <div className={`${styles.component} ${styles.text}`}>Humidity: {props.weatherData.main.humidity}%</div>  
</div>
    )
}

export default WeatherDisplay;