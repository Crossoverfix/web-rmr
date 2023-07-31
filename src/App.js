import './App.scss';
import Grid from './Grid';
import List from './List';
import Search from './Search';
// import Filter from "./component/filter/Filter";


function App() {
    function test (){
        let $ = document;
        let cssId = 'myCss';
        let head  = $.getElementsByTagName('head')[0];
        let link  = $.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = '../src/assets/style/dark-theme.scss';
        link.media = 'all';
        head.appendChild(link);

    }
    return (
        <div className="App">
            <div className="gs-header">
                <div className="gs-header__logo">
                    <div className="gs-header__logo__icon icon__logo"></div>
                    <span className="gs-header__logo__text">Аппарат Правительства <br></br>Российской Федерации</span>
                </div>
                <div className="gs-header__user">
                    <div className="gs-header__user__avatar"></div>
                    <p className="gs-header__user__name">Григоренко Д.Ю.</p>
                    <p className="gs-header__user__position">Заместитель Председателя Правительства РФ - Руководитель
                        Аппарата Правительства РФ</p>
                </div>
            </div>
            <div className="gs-frame">
                <div className="gs-frame__side-bar">
                <div className="gs-frame__side-bar__control">
                    <button className="gs-frame__side-bar__control__toggle"></button>
            </div>
            <div className="gs-frame__side-bar__nav">
                <div className="gs-frame__side-bar__tab active">
                    <div className="gs-frame__side-bar__tab__icon icon__home--mask"></div>
                    <span className="gs-frame__side-bar__tab__text">Моя страница</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__mail--mask"></div>
                    <span className="gs-frame__side-bar__tab__text">Почта</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__bank--mask"></div>
                    <span className="gs-frame__side-bar__tab__text">Мониторинг</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__box--mask"></div>
                    <span className="gs-frame__side-bar__tab__text">Проекты</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__rating--mask"></div>
                    <span className="gs-frame__side-bar__tab__text">Рейтинг</span>
                </div>
            </div>
            <div className="gs-frame__side-bar__footer" onClick={test}>
                <button className="gs-theme-switch">
                  <div className="gs-theme-switch__icon"></div>
                </button>
            </div>
</div>
    <div className="gs-frame__content">
        <div className="gs-test-btn">
            <button className="gs-btn">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-def">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-def btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-def btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-accept">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-accept btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-accept btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-reject">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-reject btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-reject btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-def">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-def btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-def btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-accept">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-accept btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-accept btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-reject">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-reject btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button className="gs-btn btn-ghost btn-reject btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>

            <button disabled className="gs-btn">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-def">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-def btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-def btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-accept">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-accept btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-accept btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-reject">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-reject btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-reject btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-def">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-def btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-def btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-accept">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-accept btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-accept btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-reject">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-reject btn-icon">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>
            <button disabled className="gs-btn btn-ghost btn-reject btn-text">
                <span className="gs-btn__icon icon__search-add--mask"></span>
                <span className="gs-btn__text">Кнопка</span>
            </button>


        </div>
        {/*<List />*/}
        {/*<Search />*/}
        {/*<Grid />*/}
    </div>
</div>
            {/*<Filter></Filter>*/}
        </div>
)
    ;
}

export default App;
