import './../css/Footer.css';
import logo from "../img/hh_kz.png";

let Footer;

Footer = () =>
{
    return(
        <footer>
            <div className='contacts'>
                <div className='hh'>
                    <span><a href='#'>HeadHunter</a></span>
                    <p>
                        Наши вакансии<br />
                        Реклама на сайте<br />
                        Требования к ПО<br />
                        Защита персональных данных<br />
                        Инвесторам<br />
                        Условия оказания услуг<br />
                        Условия использования сайтов<br />
                    </p>
                </div>
                <div className='hh'>
                    <span><a href='#'>Сервисы для соискателей</a></span>
                    <p>
                        Все сервисы<br />
                        Продвижение резюме<br />
                        Хочу у вас работать<br />
                    </p>
                </div>
                <div className='hh'>
                    <span><a href='#'>Помощь</a></span>
                    <p>
                        Пользовательское соглашение<br /><br />
                        Каталог компаний<br />
                        Работа по профессиям<br />
                    </p>
                </div>
            </div>

            <hr/>

            <div className='footer'>
                © 2022 Группа компаний HeadHunter<br />
                Сегодня на сайте 32603 вакансий, 3594414 резюме, 74101 компания и за неделю 2355895 приглашения
            </div>

            <img src={logo} className="image1"/>
        </footer>
    );
};

export default Footer;