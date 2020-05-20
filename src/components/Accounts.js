import React from 'react';
import ButtonAdminAccounts from "./Accounts/Account/ButtonAdminAccounts";
import UserCard from "./Accounts/Account/UserCard";
import CurrentUserCard from "./Accounts/Account/CurrentUserCard";
import Account from "./Accounts/Account";
class Accounts extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Account/>
                <Account/>
                <Account/>
            </div>
        )
    }
}
export default Accounts;