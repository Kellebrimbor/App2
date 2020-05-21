import React from 'react'
import UserCard from "./UserCard/UserCard";
import CurrentUserCard from "./CurrentUserCard/CurrentUserCard";
import ButtonAdminAccounts from "./ButtonAdminAccounts/ButtonAdminAccounts";

class Account extends React.Component {
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
