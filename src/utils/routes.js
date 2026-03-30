import App from "../App";
import DevMap from "../components/DevMap";
import { DEFAULT_PATH, DEV_PATH } from "./consts";

export const routes = [
    {path:DEFAULT_PATH,
    Component: App},
    {path:DEV_PATH,
    Component: DevMap},
    {path:'*',
    Component: App},
]