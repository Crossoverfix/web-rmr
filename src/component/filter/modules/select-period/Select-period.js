import './Select-period.scss'
import React from "react";

function SelectPeriod({data}){
    const now = new Date();
    let day;
    let refDateStart = React.createRef();
    let refDateEnd = React.createRef();
    if((Number(now.getMonth()) +1) < 10){
        day = '0' + (Number(now.getMonth()) +1);
    } else {
        day = (Number(now.getMonth()) +1);
    }
    const dateNow = now.getFullYear() + '-' + day + '-' + now.getDate();
    let maxDate;
    let minDate;
    if(data.type === 'before'){
        maxDate = dateNow;
        minDate = '';
    } else if(data.type === 'after') {
        maxDate = '';
        minDate = dateNow;
    } else {
        maxDate = '';
        minDate = '';
    }
    function inputSelect(ref){
        ref.current.showPicker();
    };
    return(
        <div className='gs-select-period'>
            <label className='gs-select-period__label'>
                <span className="gs-select-period__label__pre">с</span>
                <input ref={refDateStart} type="date" name={`${data.for}-date-start`} min={minDate} max={maxDate}/>
                <div className='gs-icon icon__calendar' onClick={() => inputSelect(refDateStart)}></div>
            </label>
            <label className='gs-select-period__label'>
                <span className="gs-select-period__label__pre">до</span>
                <input ref={refDateEnd} type="date" name={`${data.for}-date-end`} min={minDate} max={maxDate}/>
                <div className='gs-icon icon__calendar' onClick={() => inputSelect(refDateEnd)}></div>
            </label>
        </div>
    );
}
export default SelectPeriod;