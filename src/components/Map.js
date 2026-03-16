import '../styles/map.css'
//goals
import goal_1 from '../assets/goals/goal 1.svg'
import goal_2 from '../assets/goals/goal 2.svg'
import goal_3 from '../assets/goals/goal 3.svg'
import goal_4 from '../assets/goals/goal 4.svg'
//roads
// import first from '../assets/road/first.svg'
// import second from '../assets/road/second.svg'
// import third from '../assets/road/third.svg'

function Map({isOpen, onClose}) {
  if(!isOpen) return null;
  return (
    <div className="map_container">
    <h1>Дорожная карта</h1>
        <div className='goalContainer'>
                <img src={goal_1} id='gl1'/>
                <img src={goal_3} id='gl3'/>
                <img src={goal_4} id='gl4'/>
                <img src={goal_2} id='gl2'/>
                
                {/* <img src={first} id='rd1'/>
                <img src={second} id='rd2'/>
                <img src={third} id='rd3'/> */}
        </div>
        <button 
            onClick={onClose}
            className='backward_btn'
        > ←
        </button>
    </div>
  );
}

export default Map;
