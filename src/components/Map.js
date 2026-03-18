import '../styles/map.css'
//goals
import goal_1 from '../assets/goals/goal 1.svg'
import goal_2 from '../assets/goals/goal 2.svg'
import goal_3 from '../assets/goals/goal 3.svg'
import goal_4 from '../assets/goals/goal 4.svg'

function Map({isOpen, onClose}) {
  if(!isOpen) return null;
  return (
    <div className="map_container">
    <h1>Дорожная карта</h1>
        <div className='goalContainer'>
                <img src={goal_1} id='gl1' alt='Флажок #1'/>
                <img src={goal_3} id='gl3' alt='Флажок #2'/>
                <img src={goal_4} id='gl4' alt='Флажок #3'/>
                <img src={goal_2} id='gl2' alt='Флажок #4'/>
        </div>
    </div>
  );
}

export default Map;
