import './Active-filter.scss'
import React, {useState} from "react";
import {FormControl, MenuItem, Select} from "@mui/material";

function ActiveFilter({data}){
    const [arr, setArr] = useState(data);
    function deletItem(index){
        arr.splice(index, 1);
        setArr([...arr]);
    }
    const result = arr.map((item, index) => {
        if(item.type === 'ratio'){
            return <div key={index} className="gs-ac-filter__item">
                <span className="gs-ac-filter__item__name">{item.name}</span>
                <span className="gs-ac-filter__item__value">{item.value}</span>
                <button className="gs-ac-filter__item__delet icon__close" onClick={() => deletItem(index)}></button>
            </div>
        } else if (item.type === 'list'){
            let moreItem;
            if(item.value.length >= 2){
                moreItem = (
                    <span className="gs-ac-filter__item__value value-focus">и еще {item.value.length - 1}</span>
                )
            } else {
                moreItem = null;
            }
            return <div key={index} className="gs-ac-filter__item">
                <span className="gs-ac-filter__item__name">{item.name}</span>
                <span className="gs-ac-filter__item__value">{item.value[0].value}</span>
                {moreItem}
                <button className="gs-ac-filter__item__delet icon__close" onClick={() => deletItem(index)}></button>
            </div>
        }
        return
    });
    return(
        <div className="gs-ac-filter">
            <div className="gs-ac-filter__container">
                {result}
                <button className="gs-ac-filter__clear-btn icon__close"></button>
            </div>
            <div className="gs-ac-filter__select">
                <FormControl className="gs-mui-select">
                    <Select
                        defaultValue={1}
                    >
                        <MenuItem value={1}><span className="gs-select-text">По умолчанию</span></MenuItem>
                        <MenuItem value={2}><span className="gs-select-text">Пользовательские</span></MenuItem>
                        <MenuItem value={3}><span className="gs-select-text">Список 1</span></MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

    );
}
export default ActiveFilter;