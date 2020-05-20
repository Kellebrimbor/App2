import React from 'react'
class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "Логин :",
            password: "Пароль :",
            firstName: "Имя :",
            lastName: "Фамилия :",
            patronymic: "Отчество :",
            position: "Должность :",
            rootPrivileges: "Права администратора :",

        }
    }


    render() {
        return (
            <div>


                     {this.state.login}
                     {this.state.password}
                     {this.state.firstName}
                     {this.state.lastName}
                     {this.state.patronymic}
                     {this.state.position}
                     {this.state.rootPrivileges}

            </div>

        )

    }
}
export default UserCard;