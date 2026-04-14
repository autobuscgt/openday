import { useContext } from "react"
import pathContext from "../../context/pathContext"

function Greet() {
    const {isDev, toggleMode} = useContext(pathContext);
    return (
        <div style={{fontFamily:'MM'}}>
            <div className='dev-container'>
                <div className='choosen-path' path-id={!isDev ? "1" : "2"} onClick={toggleMode}/>
                <h1 style={!isDev ? {color:'var(--white-purple)',fontFamily:'MB'} : {color:'var(--green-color)',fontFamily:'MB'}}>
                    Если хочешь выбрать другой путь, кликни на карточку
                </h1>
            </div>
        </div>
    )
}

export default Greet
