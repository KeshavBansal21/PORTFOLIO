
import "./Toggle.scss";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () =>{
    const theme = useContext(ThemeContext);
    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})
    };
    console.log(theme)
    return(
        <div className="t">
            <img className="t-icon" src={Sun} alt=""></img>
            <img className="t-icon" src={Moon} alt=""></img>
            <div className="t-button"
             onClick={handleClick}
             style={{left:theme.state.darkMode? 0: 25}}></div>
        </div>
    )
}

export default Toggle;