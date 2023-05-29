import logo from './logo.svg';
import './App.scss';
import './assets/style/core.scss';

function App() {
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
                    <div className="gs-frame__side-bar__tab__icon icon__home"></div>
                    <span className="gs-frame__side-bar__tab__text">Моя страница</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__mail"></div>
                    <span className="gs-frame__side-bar__tab__text">Почта</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__bank"></div>
                    <span className="gs-frame__side-bar__tab__text">Мониторинг</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__box"></div>
                    <span className="gs-frame__side-bar__tab__text">Проекты</span>
                </div>
                <div className="gs-frame__side-bar__tab">
                    <div className="gs-frame__side-bar__tab__icon icon__rating"></div>
                    <span className="gs-frame__side-bar__tab__text">Рейтинг</span>
                </div>
            </div>
            <div className="gs-frame__side-bar__footer">
                <button className="gs-theme-switch">
                  <div className="gs-theme-switch__icon"></div>
                </button>
            </div>
</div>
    <div className="gs-frame__content">
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
        <div className="gs-frame__grid">
            <div className="gs-frame__grid__widget">
                <div className="gs-frame__grid__widget__header">
                    <span className="gs-frame__grid__widget__header__title">Активные задания </span>
                    <span className="gs-frame__grid__widget__header__counter">76</span>
                </div>
                <div className="gs-frame__grid__widget__content">
                    <div className="gs-frame__grid__widget__content__card">
                        <div className="gs-frame__grid__widget__content__card__counters">
                            <div className="gs-frame__grid__widget__content__card__counters__count">
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__number">19</span>
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__text">новых</span>
                            </div>
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">ПОДПИСАТЬ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">45</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number number-red">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gs-frame__grid__widget__content__card">
                        <div className="gs-frame__grid__widget__content__card__counters">
                            <div className="gs-frame__grid__widget__content__card__counters__count">
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__number">19</span>
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__text">новых</span>
                            </div>
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">РАССМОТРЕТЬ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">31</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number number-yellow">1</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gs-frame__grid__widget__content__card disable">
                        <div className="gs-frame__grid__widget__content__card__counters">
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">ОЗНАКОМИТЬСЯ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">0</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gs-frame__grid__widget medium">
                <div className="gs-frame__grid__widget__header">
                    <span className="gs-frame__grid__widget__header__title">Активные задания </span>
                    <span className="gs-frame__grid__widget__header__counter">76</span>
                </div>
                <div className="gs-frame__grid__widget__content">
                    <div className="gs-frame__grid__widget__content__card">
                        <div className="gs-frame__grid__widget__content__card__counters">
                            <div className="gs-frame__grid__widget__content__card__counters__count">
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__number">19</span>
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__text">новых</span>
                            </div>
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">ПОДПИСАТЬ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">45</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number number-red">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gs-frame__grid__widget__content__card">
                        <div className="gs-frame__grid__widget__content__card__counters">
                            <div className="gs-frame__grid__widget__content__card__counters__count">
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__number">19</span>
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__text">новых</span>
                            </div>
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">РАССМОТРЕТЬ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">31</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number number-yellow">1</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gs-frame__grid__widget__content__card disable">
                        <div className="gs-frame__grid__widget__content__card__counters">
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">ОЗНАКОМИТЬСЯ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">0</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gs-frame__grid__widget short">
                <div className="gs-frame__grid__widget__header">
                    <span className="gs-frame__grid__widget__header__title">Активные задания </span>
                    <span className="gs-frame__grid__widget__header__counter">76</span>
                </div>
                <div className="gs-frame__grid__widget__content">
                    <div className="gs-frame__grid__widget__content__card">
                        <div className="gs-frame__grid__widget__content__card__counters">
                            <div className="gs-frame__grid__widget__content__card__counters__count">
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__number">19</span>
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__text">новых</span>
                            </div>
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">ПОДПИСАТЬ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">45</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number number-red">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gs-frame__grid__widget__content__card">
                        <div className="gs-frame__grid__widget__content__card__counters">
                            <div className="gs-frame__grid__widget__content__card__counters__count">
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__number">19</span>
                                <span
                                    className="gs-frame__grid__widget__content__card__counters__count__text">новых</span>
                            </div>
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">РАССМОТРЕТЬ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">31</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number number-yellow">1</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gs-frame__grid__widget__content__card disable">
                        <div className="gs-frame__grid__widget__content__card__counters">
                        </div>
                        <p className="gs-frame__grid__widget__content__card__title">ОЗНАКОМИТЬСЯ</p>
                        <div className="gs-frame__grid__widget__content__card__info">
                            <div className="gs-frame__grid__widget__content__card__info__total">
                                <span className="gs-frame__grid__widget__content__card__info__total__number">0</span>
                            </div>
                            <div className="gs-frame__grid__widget__content__card__info__other">
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Срочно</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                                <div className="gs-frame__grid__widget__content__card__info__other__counter disable">
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__text">Просрочено</span>
                                    <span
                                        className="gs-frame__grid__widget__content__card__info__other__counter__number">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
)
    ;
}

export default App;
