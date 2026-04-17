import { useContext, createContext, useState, useMemo, useEffect } from "react";

const QuestContext = createContext();

export const useQuest = () => {
    const context = useContext(QuestContext);
    if (!context) {
        throw new Error('useQuest must be used within QuestProvider');
    }
    return context;
};

export const questionOrQuest = ((level) => {
  const random = Math.round(Math.random() * 100);
  console.log(random, '<', level, random < level )
  return random < level
})

const loadProgressFromStorage = () => {
    const savedProgress = localStorage.getItem('questProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return {
        tictactoe: false,
        seaButtle: false,
        alchemy: false,
        findSecret: false,
        centerDiv: false,
        junior: false,
        middle: false,
        senior: false,
        lead: false,
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false,
        question6: false,
        question7: false,
    };
};

const saveProgressToStorage = (progress) => {
    localStorage.setItem('questProgress', JSON.stringify(progress));
};

export const QuestProvider = ({ children }) => {
    const [completedQuests, setCompletedQuests] = useState(loadProgressFromStorage);
    useEffect(() => {
        saveProgressToStorage(completedQuests);
    }, [completedQuests]);

    const updateQuestStatus = (questName, isCompleted) => {
        setCompletedQuests(prev => ({
            ...prev,
            [questName]: isCompleted
        }));
    };

    const resetProgress = () => {
        const resetState = {
            tictactoe: false,
            seaButtle: false,
            alchemy: false,
            findSecret: false,
            centerDiv: false,
            junior: false,
            middle: false,
            senior: false,
            lead: false,
            question1: false,
            question2: false,
            question3: false,
            question4: false,
            question5: false,
            question6: false,
            question7: false,
        };
        setCompletedQuests(resetState);
        saveProgressToStorage(resetState);
    };

    const value = useMemo(() => ({
        completedQuests,
        updateQuestStatus,
        resetProgress,
        questionOrQuest
    }), [completedQuests]);

    return (
        <QuestContext.Provider value={value}>
            {children}
        </QuestContext.Provider>
    );
};