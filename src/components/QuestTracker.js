import { useEffect, useState } from "react";
import { useQuest } from "../context/questContext";
import End from "./CommonComponents/End";
import congratulations from '../assets/congratulations2.gif'
import congratulations2 from '../assets/congratulations.gif'

function QuestTracker(){
    const [showAnimation, setShowAnimation] = useState(false);
    const {completedQuests} = useQuest();
    
    const mainQuests = ["centerDiv","findBug", "alchemy", "question4", "question5", "question6", "question7"];
    const devQuests = ["junior","question1", "middle", "question2", "senior", "question3", "lead"];

    const completedCount = mainQuests.filter(quest => completedQuests[quest]).length;
    const completedDevCount = devQuests.filter(quest => completedQuests[quest]).length;

    const allMainCompleted = completedCount === mainQuests.length;
    const allDevCompleted = completedDevCount === devQuests.length;

    useEffect(()=> {
        if(allMainCompleted || allDevCompleted){
            setShowAnimation(true)
        }
    },[allMainCompleted, allDevCompleted]) 
    return (
        <div>
        {allMainCompleted ? 
            <End 
            isOpen={showAnimation} 
            message={'Вы прошли все испытания, попробуйте путь разработчика'}
            imgProp={congratulations2}
            doStyle={false}
            onClose={()=> setShowAnimation(false)}/> 
        : null
        }

        {allDevCompleted ? 
            <End 
            message={'Вы настоящий программист'}
            isDev={true}
            isOpen={showAnimation} 
            doStyle={true}
            imgProp={congratulations}
            onClose={()=> setShowAnimation(false)}/> 
        : null
        }
        </div>
    )
}
export default QuestTracker;