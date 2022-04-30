import '../css/Work.css';
import React from "react";
import {Link} from "react-router-dom";

const Work = () => {
    return (
        <div class="callings">
            <div className="block_for_calls">

                <ul className="aside_calls">
                    <p className='paragr'>Звоните по учёбе и работе</p>
                    <p className='paragr'>Бесплатно и без ограничений по времени</p>
                    <a href="#"><li>Неограниченное число участников в звонке</li></a>
                    <a href="#"><li>Приглашайте по ссылке даже тех, кого нет в нашей платформе</li></a>
                    <a href="#"><li>Включайте демонстрацию экрана</li></a>
                </ul>

                <div class="create_call">
                    <p className='create_call1'>Создать звонок по ссылке</p>
                </div>

            </div>

            <div className="block_for_info_calls">
                <p className='calls'>Все звонки</p>
                <p className='calls'>Пропущенные</p>
                <hr className="line-5"/>
                <p className='calls'>Текущие звонки</p>
                <p className='calls'>Позвонить друзьям</p>
            </div>
            <Link to="/"><p className="back">Назад</p></Link>
        </div>
    );
};

export default Work;