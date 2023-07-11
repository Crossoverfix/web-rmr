import "./Search-bar.scss";


function SearchBar({name, placeholder, value}){
    console.log(name);
    console.log(placeholder);
    console.log(value);
    return(
        <div className="gs-search-bar">
            <div className="gs-search-bar__icon icon__search"></div>
            <input className="gs-search-bar__input" type="text" name={name} placeholder={placeholder} value={value}/>
            <button className="gs-search-bar__clear icon__close"></button>
            <button className="gs-search-bar__submit">Найти</button>
        </div>
    );
} export default SearchBar;