import './List.scss';


function Search() {
    return (
        <div className="gs-frame__search">
            <div className="gs-frame__search__input">
                <input placeholder="Поиск документа" type="search" className="gs-frame__search__input__string"></input>
                <input type="submit" value="Найти" className="gs-frame__search__input__submit"></input>
            </div>
            <div className="gs-frame__search__btn-group">
                <button className="gs-frame__search__btn-group__btn">
                    <div className="gs-frame__search__btn-group__btn__icon icon__search-add"></div>
                    <span className="gs-frame__search__btn-group__btn__text">Создать поручение</span>
                </button>
                <button className="gs-frame__search__btn-group__btn">
                    <div className="gs-frame__search__btn-group__btn__icon icon__search-gog"></div>
                    <span className="gs-frame__search__btn-group__btn__text">Настройки</span>
                </button>
            </div>
        </div>
)
    ;
}

export default Search;
