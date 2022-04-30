import './../css/Header.css';
import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

class Header_parent extends React.Component {
    render() {
        return (
                <header>
                    <div className='strana'>
                        <a href='#'>Казахстан</a>
                    </div>

                    <Header name="Главная"/>
                    <Header name="Новости"/>
                    <Header name="Поиск работы"/>
                    <Header name="Контакты"/>
                    <Header name="Встреча"/>

                    <div className='link'>
                        <Link to="/work">Хочу у вас работать</Link>
                    </div>
                </header>
        );
    }
}

export default Header_parent;