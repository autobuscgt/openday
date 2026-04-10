import { useContext } from "react"
import pathContext from "../../context/pathContext"

function Greet() {
    const {isDev, toggleMode} = useContext(pathContext);
    return (
    <div className=''>
        <div style={{fontFamily:'MM'}}>
            <div className='dev-container'>
                <h1 style={!isDev ? {color:'var(--white-purple)'} : {color:'var(--green-color)'}}>
                    Если хочешь выбрать другой путь, кликни на карточку
                </h1>
                <div className='choosen-path' path-id={!isDev ? "1" : "2"} onClick={toggleMode}/>
            </div>
        </div>
  </div>
    )
}

export default Greet
