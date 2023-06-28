import React from "react";
import "./Filter.scss";
import CheckBoxGroup from "./modules/check-box-group/Check-box-group";
import RadioBoxGroup from "./modules/radio-box-group/Radio-box-group";


function Filter(){
    const periodExecution = {
        name: 'periodExecution',
        title: 'Срок исполнения',
        list: [
            {value:1,label:'Просрочено'},
            {value:2,label:'Срочно'},
            {value:3,label:'Истекает в ближайшие 7 дней'},
        ]
    };
    const control = {
        name: 'control',
        title: 'Контроль',
        list: [
            {value:1,label:'Все'},
            {value:2,label:'На контроле'},
        ]
    };
    const displayPeriod = {
        name: 'displayPeriod',
        title: 'Период отображения',
        list: [
            {value:1,label:'Последний месяц'},
            {value:2,label:'Последний квартал'},
            {value:3,label:'Последний год'},
            {value:4,label:'Выбрать период',activeKey:'selectPeriod'},
        ],
        optionInput: {
            name: 'selectPeriod',
            for: 'displayPeriod',
            type: 'before',
            addiction: true
        }
    };
    return(
        <div className="gs-filter">
            <div className="gs-filter__wrap">
                <div className="gs-filter__header">
                    <h2 className="gs-filter__header__title">Фильтры</h2>
                    <button className="gs-filter__header__close icon__close"></button>
                </div>
                <div className="gs-filter__body">
                    <div className="gs-filter__body__col">
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Срок исполнения</span>
                            <div className="gs-filter__block__content">
                                <CheckBoxGroup data={periodExecution}></CheckBoxGroup>
                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Контроль</span>
                            <div className="gs-filter__block__content">
                                <RadioBoxGroup data={control}></RadioBoxGroup>
                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Период отображения</span>
                            <div className="gs-filter__block__content">
                                <RadioBoxGroup data={displayPeriod}></RadioBoxGroup>
                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Подписант</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Краткое содержание</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                    </div>
                    <div className="gs-filter__body__col">
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Вид документа</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Номер поручения</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Дата поручения</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Подразделение исполнителя</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Исполнитель документа</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                    </div>
                    <div className="gs-filter__body__col">
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Метка секретариата</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Кто направил</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Тип задания</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                        <div className="gs-filter__block">
                            <span className="gs-filter__block__title">Вид задания</span>
                            <div className="gs-filter__block__content">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="gs-filter__footer">
                    <button className="gs-filter__footer__btn btn-secondary">Очистить</button>
                    <button className="gs-filter__footer__btn btn-primary">Применить</button>
                </div>
            </div>
        </div>

    );
};
export default Filter;