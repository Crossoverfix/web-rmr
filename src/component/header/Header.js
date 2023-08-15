import React from "react";
import {FormControl, MenuItem, Select} from "@mui/material";
import ActiveFilter from "../active-filter/Active-filter";
import TabsTag from "../tabs-tag/TabsTag";
import './Header.scss';

function Header(){
    let boolFalse = false;
    let testLink = "#"
    let testLink2 = "#"
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
        <div className="gs-page-header">
            <div className="gs-page-header__breadcrumb">
                <ul className="gs-breadcrumb">
                    <li><a href={testLink2}>Почта</a></li>
                    <li><span>Подписать</span></li>
                </ul>
            </div>
            <div className="gs-page-header__control">
                <div className="gs-page-header__control__page">
                    <div className="gs-page-control">
                        <a href={testLink} className="gs-page-control__back-link icon__back-link">back</a>
                        <span className="gs-page-control__title">Подписать</span>
                        <span className="gs-page-control__count">30</span>
                        <span className="gs-page-control__description">(Законопроекты, НПА, резолюции, протоколы, письма)</span>
                        <span className="gs-page-control__date">Текущая дата: 22.05.2023</span>
                    </div>
                </div>
                {boolFalse && <>
                    <div className="gs-page-header__control__content">
                        <div className="gs-content-control">
                            <div className="gs-content-control__filter">
                                <div className="gs-content-control__filter__sort">
                                    <FormControl className="gs-mui-select">
                                        <Select
                                            defaultValue={1}
                                        >
                                            <MenuItem value={1}><span className="gs-select-text">Сначала непрочитанные</span></MenuItem>
                                            <MenuItem value={2}><span className="gs-select-text">Сначала прочитанные</span></MenuItem>
                                            <MenuItem value={3}><div className="gs-icon icon__sort-up"></div><span className="gs-select-text">По дате поступления</span></MenuItem>
                                            <MenuItem value={4}><div className="gs-icon icon__sort-down"></div><span className="gs-select-text">По дате поступления</span></MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <ActiveFilter data={filterData}></ActiveFilter>
                            <div className="gs-content-control__action">
                                <button className="gs-content-control__action__btn">
                                    <span>Выбрать документы</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="gs-page-header__control__tabs">
                        <TabsTag data={tagTabList}></TabsTag>
                    </div>
                </>}
            </div>
        </div>
    );
}
export default Header;