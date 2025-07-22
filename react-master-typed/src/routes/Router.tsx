import {BrowserRouter, Route, Switch} from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";
import {IRouteProps} from "../interface/coinInterface";

const Router = ({isDark, toggleDark}:IRouteProps) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin isDark={isDark} />
                </Route>
                <Route path="/">
                    <Coins toggleDark={toggleDark} />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;