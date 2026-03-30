import {Link, Navigate} from 'react-router-dom'

function Greet() {
const handler = () =>{
    Navigate({to:'/dev'})
}

    return (
    <div className=''>
        <div style={{fontFamily:'MM'}}>
            <p>Приветствуем тебя!</p> <br/>
            <p>Сегодня мы предлагаем сыграть в небольшую игру, которая поверхностно погружает в повседневные суету из задач и проблем разработчика.</p><br/>
            <p>Вы знаете, что такое сетевой пакет? Это набор данных, передаваемый по сети, от одной точки в другую - от соседа к соседа и от компютера к смартфону.</p><br/>
            <p>Для того, чтобы переача данных прошла успешно от отправителя к адресату, нужно правильно настроить для него маршрут. Перед вами карта. Сопроводите пакет от точки "А" к точке "Б", пройдя все заботы и проблемы.</p>
            
            <div className='dev-container'>

                <Link to={'/'}>
                    <div className='choosen-path' path-id="2"/>
                    </Link>
                <Link to={'/dev'}>
                    <div className='choosen-path' path-id="1"/>
                </Link>
            </div>
        </div>
  </div>
    )
}

export default Greet
