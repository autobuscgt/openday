import { useContext } from "react";
import pathContext from "../../context/pathContext";



function Switcher(){
    const { isDev, toggleMode } = useContext(pathContext);
        return (
        <div className={`switch-container ${isDev ? 'dev': ''}`}>
            <button 
            className= {`switch-btn ${isDev ? 'dev': ''}`}
            onClick={toggleMode}/>
        </div>
    )
}
export default Switcher;