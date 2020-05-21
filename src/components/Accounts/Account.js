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
            password: "JOPA",

        }
    }
    changeProfile(){}
    deleteProfile(){}
    ChangePassword(){
         this.setState({password: Math.random()})
    }
    render() {
        return (
            <div>
                        <UserCard/>
                        <CurrentUserCard  login={"kel"} password={this.state.password} firstName={"abrec"}
                                             lastName={"Feanoring"} patronymic={"Feanoring"}
                                             position={"anti-proger"}
                                             rootPrivileges={"admin"}/>


                <ButtonAdminAccounts handler={this.ChangePassword}
                                     changeHandler={this.changeProfile}
                                     deleteProfile={this.deleteProfile}/>


            </div>
        )
    }
}

export default Account;