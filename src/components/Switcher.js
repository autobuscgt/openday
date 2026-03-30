import { useState } from "react";

function Switcher(){
    const [toggled, setToggled] = useState(false)

    const toggleRoad = () => {
        toggled === false ? setToggled(true) : setToggled(false)
    }
    return (
        <div className={`switch-container ${toggled === true ? 'dev': ''}`}>
            <button 
            className= {`switch-btn ${toggled === true ? 'dev': ''}`}
            onClick={toggleRoad}/>
        </div>
    )
}
export default Switcher;