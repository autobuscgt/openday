import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { QuestProvider } from "./context/questContext";

function AppRouter(){
    return (
        <QuestProvider>
        <Routes>
            {routes.map(item => (
                <Route path={item.path} Component={item.Component}/>
            ))}
        </Routes> 
        </QuestProvider>
    )
}
export default AppRouter;