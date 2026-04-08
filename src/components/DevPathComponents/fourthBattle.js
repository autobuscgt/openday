import { useQuest } from "../../context/questContext";

function Lead(){
    const {updateQuestStatus} = useQuest();
    const completeLvl = () => {
        updateQuestStatus('lead', true);
    }

    return (
        <div>
            Lead
            <button onClick={completeLvl}>
                Пройти уровень
            </button>
        </div>
    )
}
export default Lead;