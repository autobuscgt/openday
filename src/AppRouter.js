import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { QuestProvider } from "./context/questContext";
import pathContext from "./context/pathContext";



function AppRouter(){
    return (
        <QuestProvider>
            <pathContext.Provider>
                <Routes>
                    {routes.map(item => (
                        <Route path={item.path} Component={item.Component}/>
                    ))}
                </Routes> 
            </pathContext.Provider>
        </QuestProvider>
    )
}
export default AppRouter;