import { useEffect, useState } from "react";
import { useQuest } from "../context/questContext";
import End from "./CommonComponents/End";

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
    },[allMainCompleted, showAnimation, allDevCompleted])
    return (
        <div>
            {allMainCompleted || allDevCompleted ? <End isOpen={showAnimation} onClose={()=> setShowAnimation(false)}/> : ""}
        </div>
    )
}
export default QuestTracker;