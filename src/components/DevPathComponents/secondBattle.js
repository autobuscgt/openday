import { useQuest } from "../../context/questContext";

function Middle(){
    const {updateQuestStatus, completedQuests} = useQuest();
    const completeLvl = () => {
        updateQuestStatus('middle', true);
        console.log(completedQuests);
    }
    return (
        <div>
            Middle
            <button onClick={completeLvl}>
                Пройти уровень
            </button>
        </div>
    )
}
export default Middle;