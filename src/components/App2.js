import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import Accounts from "./Accounts/Accounts";

class App2 extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <LoginForm/>
                    </Route>
                    <Route exact path={"/hohoho"}>
                        <Accounts />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App2;
