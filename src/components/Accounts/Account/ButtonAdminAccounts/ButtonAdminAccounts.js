import React from 'react';

class ButtonAdminAccounts extends React.Component {
    constructor(props) {
        super(props);
        this.changeProfile = this.changeProfile.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
    }
    changeProfile() {
        alert(2);
    }

    deleteProfile() {
        alert(3);
    }

    render() {
        return (
            <div>
            <button onClick={this.props.handler}>Сменить пароль</button>
                <button onClick={this.changeProfile}>Редактировать профиль</button>
                <button onClick={this.deleteProfile}>Удалить профиль</button>
            </div>
        )
    }
}
export default ButtonAdminAccounts;
