import WeatherContainer from "./container/WeatherContainer";
import styles from "./styles/Weather.module.css"
function Weather(){
    return(<div className={styles.weatherBackground}>
        <WeatherContainer/>
    </div>)
}


export default Weather;