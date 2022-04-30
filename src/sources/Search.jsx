import './../css/Search.css';

let Search;

Search = () =>
{
    return(
        <div className='main'>
            <div className='innerMain'>
                <span>Найди работу мечты</span>
                <div className='search'>
                    <input placeholder='Профессия, должность или компания'/>
                    <button>Найти работу</button>
                    <a href="#">Ищу сотрудника</a>
                </div>
            </div>
        </div>
    );
};

export default Search;