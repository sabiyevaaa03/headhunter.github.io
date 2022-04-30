import './../css/Header.css';
import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <header>
                <ul className="links">
                    <a href="#"><li>{this.props.name}</li></a>
                </ul>
                {button}
            </header>
        );
    }
}
function LoginButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Оставить заявку
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Заявка оставлена
        </button>
    );
}

export default Header;