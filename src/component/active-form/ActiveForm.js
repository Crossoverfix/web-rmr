import React from "react";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './ActiveForm.scss';
import CheckBoxGroup from "../filter/modules/check-box-group/Check-box-group";

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
                            <textarea></textarea>
                        </div>
                    </div>
                    <div className="gs-aform__content__col-second">
                        <div className="gs-aform__content__form__input-wrapp">
                            <div className="gs-aform__content__form__date">
                                <span className="gs-aform__content__form__date__label">Срок</span>
                                <div className="gs-mod-calendar">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker className="gs-select-period__picker"/>
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className="gs-aform__content__form__check-box-group">
                                <CheckBoxGroup data={checkBoxGroup}></CheckBoxGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gs-aform__content__list"></div>
            </div>
            <div className="gs-aform__footer"></div>
        </div>
    );
}
export default ActiveForm;