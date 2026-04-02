
import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';


const divStyle = {
  width: '100%',
  overflow:'hidden',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

function DevMap(){
    return (
      <div className="map-container" style={divStyle}>
      <div className='map-header' data-id="dev">
        <h1>{'{__ПутьР@зработчик@_}'}</h1>
      </div>
      <div className='road-container'>
        <div id='rd1'>
          <FlagTask
            id={'5'}
            item={'JUNIOR'}
            isActive={true}
            isCompleted={true}
          />
        </div>
        
        <div id='rd2'>
          <RoadContainer 
          isActive={true}
          isCompleted={true}
          id={"4"}
          />
        </div>
        
        <div id='rd3'>
        <FlagTask
            id={'6'}
            item={'MIDDLE'}
            isActive={true}
            isCompleted={true}
          />
        </div>
        
        <div id='rd4'>
          <RoadContainer
          id={"5"}
          isActive={true}
          isCompleted={true}
          />
        </div>
        
        <div id='rd5'>
          <RoadContainer
          id={"6"}
          isActive={true}
          isCompleted={true}
          />
        </div>

        <div id='rd6'>
        <FlagTask
            id={'7'}
            item={'SENIOR'}
            isActive={true}
            isCompleted={true}
          />
        </div>

        <div id='rd7'>
        <FlagTask
            id={'8'}
            item={'LEAD'}
            isActive={true}
            isCompleted={true}
        />
        </div>
      </div>
      
      </div>
    )
}
export default DevMap;