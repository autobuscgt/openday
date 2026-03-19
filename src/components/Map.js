import '../styles/map.css'
import FlagTask from './MapComponents/FlagTask';
import red_green from '../components/MapComponents/red_green.svg'
import blue_green from '../components/MapComponents/blue_green.svg'
import blue_orange from '../components/MapComponents/blue_orange.svg'

const divStyle = {
  width:'100%',
  justifyContent:'center',
  flexDirection:'column',
  display:'flex',
  alignItems:'center'
}

function Map() {
  return (
    <div className="map-container" style={divStyle}>
    <h1 style={{color:'var(--white-purple)'}}>Дорожная карта</h1>
    {/* <img src={road_map} style={{width:'700px'}} className='roadmap' alt='Дорожная карта'/> */}
    <div className='road-container'>
      <FlagTask isCompleted={true} isActive={false} id={"4"}/>
      <img src={blue_orange} alt='blue/yellow road' id='rd3'/>
      <FlagTask isCompleted={true} isActive={false} id={"3"}/>
      <img src={blue_green} alt='green/blue road' id='rd2'/>
      <FlagTask isCompleted={true} isActive={false} id={"2"}/>
      <img src={red_green} alt='red/green road' id='rd1'/>
      <FlagTask isCompleted={true} isActive={true} id={"1"}/>
    </div>
    </div>
  );
}

export default Map;
