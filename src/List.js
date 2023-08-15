import './List.scss';
import {FormControl, MenuItem, Select} from "@mui/material";
import ActiveFilter from "./component/active-filter/Active-filter";
import TabsTag from "./component/tabs-tag/TabsTag";
import View from "./component/view/View";
import Header from "./component/header/Header";
import ActiveForm from "./component/active-form/ActiveForm";


function List() {
    let boolFalse = false;
    let testLink = "#"
    const filterData = [
        {type: 'ratio', name: 'Срок исполнения', value: 'Просрочено'},
        {type: 'ratio', name: 'Период отображения', value: 'Последний месяц'},
        {type: 'ratio', name: 'Контроль', value: 'На контроле'},
        {type: 'ratio', name: 'Срочность', value: 'Срочно'},
        {type: 'list', name: 'Вид документа', value: [
                {id: 1, value: 'Доклад об исполнении поручений, указаний Президента'},
                {id: 2, value: 'Заключение на проект ФЗ, ФКЗ'},
                {id: 4, value: 'Номенклатура дел'}
            ]}
    ];
    const tagTabList = [
        {id: 11, value: 'Проекты НПА'},
        {id: 12, value: 'КС'},
        {id: 15, value: 'Указания Президента'},
        {id: 16, value: 'Администрация Президента'}
    ];
    return (
        <div className="gs-frame__list">
            <Header></Header>
            <ActiveForm></ActiveForm>
            <View data={testLink}></View>
            {boolFalse &&  <div className="gs-frame__list__content">
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
            </div>}
        </div>
);
}

export default List;
