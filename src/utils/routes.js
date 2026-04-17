import App from "../App";
import TestGames from "../components/TestGames";
import { DEFAULT_PATH, DEV_PATH_ } from "./consts";

export const routes = [
    {path:DEFAULT_PATH,
    Component: App},
    {path:DEV_PATH_,
    Component: TestGames},
    {path:'*',
    Component: App},
]