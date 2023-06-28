import './List.scss';


function List() {
    let testLink = "#"
    let testLink2 = "#"
    return (
        <div className="gs-frame__list">
            <div className="gs-frame__list__header">
                <div className="gs-frame__list__header__breadcrumb">
                    <ul className="gs-breadcrumb">
                        <li><a href={testLink2}>Почта</a></li>
                        <li><span>Подписать</span></li>
                    </ul>
                </div>
                <div className="gs-frame__list__header__control">
                    <div className="gs-frame__list__header__control__page">
                        <div className="gs-page-control">
                            <a href={testLink} className="gs-page-control__back-link icon__back-link">back</a>
                            <span className="gs-page-control__title">Подписать</span>
                            <span className="gs-page-control__count">30</span>
                            <span className="gs-page-control__description">(Законопроекты, НПА, резолюции, протоколы, письма)</span>
                            <span className="gs-page-control__date">Текущая дата: 22.05.2023</span>
                        </div>
                    </div>
                    <div className="gs-frame__list__header__control__content">
                        <div className="gs-content-control">
                            <div className="gs-content-control__filter">
                                <div className="gs-content-control__filter__sort">
                                    <span className="gs-content-control__filter__sort__name">По сроку исполнения</span>
                                    <a href={testLink} className="gs-content-control__filter__sort__btn">
                                        <div className="btn-icon icon__arr-sort-up"></div>
                                        <div className="btn-icon icon__arr-sort-down"></div>
                                    </a>
                                </div>
                            </div>
                            <div className="gs-content-control__action">
                                <button className="gs-content-control__action__btn">
                                    <span>Выбрать документы</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gs-frame__list__content">
                <div className="gs-list-card">
                    <div className="gs-list-card__content">
                        <div className="gs-list-card__content__head">
                            <span className="gs-list-card__content__head__title">Резолюция</span>
                            <span className="gs-list-card__content__head__tag">Важно</span>
                            <span className="gs-list-card__content__head__tag">Важно</span>
                        </div>
                        <span className="gs-list-card__content__text">
                            О формировании перечня общественно значимых нормативных правовых актов, разработанных в период с 2000 по 2024 годы, а также инициатив на плановый период до 2030 года
                        </span>
                        <div className="gs-list-card__content__author">
                            <span className="gs-list-card__content__author__user">Направил: Беседа А.С.</span>
                            <span className="gs-list-card__content__author__dept">Департамент по обеспечению деятельности административных органов</span>
                        </div>
                        <div className="gs-list-card__content__footer">
                            <span className="gs-list-card__content__footer__doc-number">№ уч.0020345-Уч-2023 от 10.05.2023</span>
                        </div>
                    </div>
                    <div className="gs-list-card__info">
                        <div className="gs-list-card__info__header">
                            <span className="gs-list-card__info__header__title">Плановый срок</span>
                            <span className="gs-list-card__info__header__date">25.05.2023</span>
                        </div>
                        <div className="gs-list-card__info__comment">
                            <span className="gs-list-card__info__comment__point">
                                Обсуждали на совещании сегодня по вопросу пунктов пропуска
                            </span>
                        </div>
                        <div className="gs-list-card__info__user">
                            <span className="gs-list-card__info__user__position">Секретариат:</span>
                            <span className="gs-list-card__info__user__name">Решетников Н.Н.</span>
                        </div>
                    </div>
                </div>
                <div className="gs-list-card">
                    <div className="gs-list-card__content">
                        <div className="gs-list-card__content__head">
                            <span className="gs-list-card__content__head__title">Резолюция</span>
                        </div>
                        <span className="gs-list-card__content__text">
                    О представлении предложений в рамках установленной компетенции
                        </span>
                        <div className="gs-list-card__content__author">
                            <span className="gs-list-card__content__author__user">Направил: Беседа А.С.</span>
                            <span className="gs-list-card__content__author__dept">Департамент по обеспечению деятельности административных органов</span>
                        </div>
                        <div className="gs-list-card__content__footer">
                            <span className="gs-list-card__content__footer__doc-number">№ уч.0020345-Уч-2023 от 10.05.2023</span>
                        </div>
                    </div>
                    <div className="gs-list-card__info">
                        <div className="gs-list-card__info__header">
                            <span className="gs-list-card__info__header__title">Плановый срок</span>
                            <span className="gs-list-card__info__header__date date-red">25.05.2023</span>
                        </div>
                        <div className="gs-list-card__info__comment">
                        </div>
                        <div className="gs-list-card__info__user">
                        </div>
                    </div>
                </div>
                <div className="gs-list-card card-focus">
                    <div className="gs-list-card__content">
                        <div className="gs-list-card__content__head">
                            <span className="gs-list-card__content__head__title">Резолюция</span>
                            <span className="gs-list-card__content__head__tag">Важно</span>
                            <span className="gs-list-card__content__head__tag">Важно</span>
                        </div>
                        <span className="gs-list-card__content__text">
О представлении предложений в рамках установленной компетенции
                        </span>
                        <div className="gs-list-card__content__author">
                            <span className="gs-list-card__content__author__user">Направил: Беседа А.С.</span>
                            <span className="gs-list-card__content__author__dept">Департамент по обеспечению деятельности административных органов</span>
                        </div>
                        <div className="gs-list-card__content__footer">
                            <span className="gs-list-card__content__footer__doc-number">№ уч.0020345-Уч-2023 от 10.05.2023</span>
                        </div>
                    </div>
                    <div className="gs-list-card__info">
                        <div className="gs-list-card__info__header">
                            <span className="gs-list-card__info__header__title">Плановый срок</span>
                            <span className="gs-list-card__info__header__date">25.05.2023</span>
                        </div>
                        <div className="gs-list-card__info__comment">
                            <span className="gs-list-card__info__comment__point">
                                Обсуждали на совещании сегодня по вопросу пунктов пропуска
                            </span>
                        </div>
                        <div className="gs-list-card__info__user">
                            <span className="gs-list-card__info__user__position">Секретариат:</span>
                            <span className="gs-list-card__info__user__name">Решетников Н.Н.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default List;
