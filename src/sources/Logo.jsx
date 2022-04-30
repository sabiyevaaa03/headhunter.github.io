import './../css/Logo.css';
import logo from "../img/hh_kz.png";

let Logo;

Logo = () =>
{
    return(
        <div className='mainHeader'>
            <div className='logo'>
                <img src={logo}/>
                <div className='help'>Работадателям</div>
                <div className='help'>Помощь</div>
            </div>

            <div className='login'>
                <div className='sign'>Создать резюме</div>
                <div className='log'>Войти</div>
            </div>
        </div>
    );
};

export default Logo;