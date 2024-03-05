import useLocalStorage from "./container/useLocalStorage";
import './styles/LightDark.css'
function LightDark(){
    const [theme,setTheme] = useLocalStorage("theme","dark");

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" :"light");
    }

    return(
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World!</p>
                <button onClick={handleTheme}>Change Theme</button>
            </div>
        </div>
    )
}


export default LightDark;