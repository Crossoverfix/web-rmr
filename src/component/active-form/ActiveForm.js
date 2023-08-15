import React from "react";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './ActiveForm.scss';
import CheckBoxGroup from "../filter/modules/check-box-group/Check-box-group";
import {FormControl, MenuItem, Select} from "@mui/material";

function ActiveForm (){
    const checkBoxGroup = {
        name: 'periodExecution',
        title: '',
        list: [
            {value:1,label:'Контроль'},
            {value:2,label:'Проверю лично'},
            {value:3,label:'Использовать контрольные точки'},
        ]
    };
    return (
        <div className="gs-aform">
            <div className="gs-aform__tabs">
                <div className="gs-aform__tabs__labels active">
                    <span className="gs-aform__tabs__labels__title">Новое поручение</span>
                </div>
                <div className="gs-aform__tabs__labels disable">
                    <span className="gs-aform__tabs__labels__title">Созданные поручения</span>
                    <span className="gs-aform__tabs__labels__counter">0</span>
                </div>
                <div className="gs-aform__tabs__labels">
                    <span className="gs-aform__tabs__labels__title">Созданные поручения</span>
                    <span className="gs-aform__tabs__labels__counter">1</span>
                </div>
            </div>
            <div className="gs-aform__content">
                <div className="gs-aform__content__form">
                    <div className="gs-aform__content__col-first">
                        <div className="gs-mod-textarea">
                            <textarea placeholder="Текст поручения"></textarea>
                        </div>
                    </div>
                    <div className="gs-aform__content__col-second">
                        <div className="gs-aform__content__form__check-field-group">
                            <div className="gs-aform__content__form__date">
                                <span className="gs-aform__content__form__date__label">Срок</span>
                                <div className="gs-mod-calendar">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker className="gs-select-period__picker"/>
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className="gs-mod-select">
                                <FormControl >
                                    <Select defaultValue={0}>
                                        <MenuItem value={0}><span className="gs-select-text gs-placeholder">Контролер</span></MenuItem>
                                        <MenuItem value={1}><span className="gs-select-text">Адамчук С.А.</span></MenuItem>
                                        <MenuItem value={2}><span className="gs-select-text">Адамчук С.А.</span></MenuItem>
                                        <MenuItem value={3}><span className="gs-select-text">Адамчук С.А.</span></MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="gs-aform__content__form__check-box-group">
                            <CheckBoxGroup data={checkBoxGroup}></CheckBoxGroup>
                        </div>
                    </div>
                </div>
                <div className="gs-aform__content__list">
                    <div className="gs-aform__content__col-first">
                        <div className="gs-aform__content__list__user">
                            <div className="gs-aform__content__list__user__filter">
                                <div className="gs-mod-search icon__search--before--mask">
                                    <input placeholder="Быстрый поиск"/>
                                </div>
                                <div className="gs-mod-select">
                                    <FormControl >
                                        <Select defaultValue={0}>
                                            <MenuItem value={0}><span className="gs-select-text gs-placeholder">Выбрать из списка</span></MenuItem>
                                            <MenuItem value={1}><span className="gs-select-text">список 1</span></MenuItem>
                                            <MenuItem value={2}><span className="gs-select-text">список 2</span></MenuItem>
                                            <MenuItem value={3}><span className="gs-select-text">список 3</span></MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="gs-aform__content__list__user__grid gs-scroll-slim">
                                <table className="gs-mod-grid" cellspacing="0"  border="0">
                                    <tr className="gs-mod-grid__header">
                                        <td>ФИО</td>
                                        <td>Должность</td>
                                        <td>Подразделение</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="gs-aform__content__col-second">
                        <div className="gs-aform__content__list__selected">
                            <div className="gs-aform__content__list__selected__control">
                                <button className="gs-btn btn-icon btn-def btn-ghost gs-btn-revers">
                                    <span className="gs-btn__icon icon__back-link--mask"></span>
                                </button>
                                <button className="gs-btn btn-icon btn-def btn-ghost">
                                    <span className="gs-btn__icon icon__back-link--mask"></span>
                                </button>
                            </div>
                            <div className="gs-aform__content__list__selected__grid gs-scroll-slim">
                                <table className="gs-mod-grid" cellSpacing="0" border="0">
                                    <tr className="gs-mod-grid__header">
                                        <td></td>
                                        <td>Выбрать ответственного</td>
                                        <td>Должность</td>
                                        <td>Подразделение</td>
                                    </tr>
                                    <tr>
                                        <td><label className="selected-radio">
                                            <input type="radio" name="selected-user" value="1"/>
                                            <div className="selected-radio__label"></div>
                                        </label></td>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td><label className="selected-radio">
                                            <input type="radio" name="selected-user" value="2"/>
                                            <div className="selected-radio__label"></div>
                                        </label></td>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td><label className="selected-radio">
                                            <input type="radio" name="selected-user" value="3"/>
                                            <div className="selected-radio__label"></div>
                                        </label></td>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td><label className="selected-radio">
                                            <input type="radio" name="selected-user" value="4"/>
                                            <div className="selected-radio__label"></div>
                                        </label></td>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td><label className="selected-radio">
                                            <input type="radio" name="selected-user" value="4"/>
                                            <div className="selected-radio__label"></div>
                                        </label></td>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td><label className="selected-radio">
                                            <input type="radio" name="selected-user" value="4"/>
                                            <div className="selected-radio__label"></div>
                                        </label></td>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                    <tr>
                                        <td><label className="selected-radio">
                                            <input type="radio" name="selected-user" value="4"/>
                                            <div className="selected-radio__label"></div>
                                        </label></td>
                                        <td>Адамчук С.А.</td>
                                        <td>директор</td>
                                        <td>Департамент обеспечения деятельности</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gs-aform__footer">
                <div className="gs-aform__footer__btn-group">
                    <button className="gs-btn btn-text btn-def">
                        <span className="gs-btn__text">Сохранить</span>
                    </button>
                    <button className="gs-btn btn-text btn-accept">
                        <span className="gs-btn__text">Отправить</span>
                    </button>
                </div>
                <button className="gs-btn btn-def btn-ghost gs-btn-icon-revers">
                    <span className="gs-btn__text">К созданным поручениям</span>
                    <span className="gs-btn__icon icon__back-link--mask"></span>
                </button>
            </div>
        </div>
    );
}
export default ActiveForm;