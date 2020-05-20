import React from 'react'
import UserCard from "./Account/UserCard";
import CurrentUserCard from "./Account/CurrentUserCard";
import ButtonAdminAccounts from "./Account/ButtonAdminAccounts";

class Account extends React.Component {
    static ChangingPassword;
    constructor(props) {
        super(props);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.state={
            buttonOnChangePassword: false,
            password: "",

        }
    }
    ChangePassword(){
         return  alert(5);
    }
    render() {
        return (
            <div>


                        <UserCard/>
                        <CurrentUserCard  login={"kel"} password={"kel123"} firstName={"abrec"}
                                             lastName={"Feanoring"} patronymic={"Feanoring"}
                                             position={"anti-proger"}
                                             rootPrivileges={"admin"}/>


                <ButtonAdminAccounts children={this.ChangePassword}/>


            </div>
        )
    }
}

export default Account;