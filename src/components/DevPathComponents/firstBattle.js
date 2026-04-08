import { useQuest } from "../../context/questContext";

function FIFO(){
    const {updateQuestStatus, completedQuests} = useQuest();
    const completeLvl = () => {
        updateQuestStatus('junior', true);
        console.log(completedQuests);
    }
    return (
        <div>
            Junior
            <button onClick={completeLvl}>
                Пройти уровень
            </button>
        </div>
    )
}
export default FIFO;