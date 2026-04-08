import { useContext } from "react"
import pathContext from "../context/pathContext"

function Greet() {
    const {isDev, toggleMode} = useContext(pathContext);
    return (
    <div className=''>
        <div style={{fontFamily:'MM'}}>
            <p>Приветствуем тебя!</p> <br/>
            <p>Сегодня мы предлагаем сыграть в небольшую игру, которая поверхностно погружает в повседневные суету из задач и проблем разработчика.</p><br/>
            <p>Вы знаете, что такое сетевой пакет? Это набор данных, передаваемый по сети, от одной точки в другую - от соседа к соседа и от компютера к смартфону.</p><br/>
            <p>Для того, чтобы переача данных прошла успешно от отправителя к адресату, нужно правильно настроить для него маршрут. Перед вами карта. Сопроводите пакет от точки "А" к точке "Б", пройдя все заботы и проблемы.</p>
            
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
