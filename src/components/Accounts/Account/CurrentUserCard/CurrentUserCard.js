import React from 'react'

class CurrentUserCard extends React.Component {

    render() {
        return (
            <div>

                    {this.props.login}
                     {this.props.password}
                     {this.props.firstName}
                     {this.props.lastName}
                     {this.props.patronymic}
                     {this.props.position}
                     {this.props.rootPrivileges}

            </div>
        );
    }
}
export default CurrentUserCard;
