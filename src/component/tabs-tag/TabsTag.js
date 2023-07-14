import './TabsTag.scss'
import React from "react";;

function TabsTag({data}){
    console.log(data);

    return(
        <div className="gs-tabs-mark">
            <label className="gs-tabs-mark__item">
                <input type="radio" name="tabs" value='0'/>
                <span className="gs-tabs-mark__item__text">Все документы</span>
            </label>
            { data.map((item) => {
                return (
                    <label key={item.id} className="gs-tabs-mark__item">
                        <input type="radio" name="tabs" value={item.id}/>
                        <span className="gs-tabs-mark__item__text">{item.value}</span>
                    </label>
                )
            })}
        </div>
    );
}
export default TabsTag;