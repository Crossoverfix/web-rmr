import './View.scss'
import React from "react";;

function View({data}){
    console.log(data);

    return(
        <div className="gs-view">
            <div className="gs-view__window">
                <div className="gs-view__window__preview gs-scroll-slim">
                    <div className="gs-view__window__preview__object">
                        <div className="gs-view__window__preview__object__content"></div>
                        <span className="gs-view__window__preview__object__number"></span>
                    </div>
                </div>
                <div className="gs-view__window__frame">
                    <div className="gs-view__window__frame__control">
                        <div className="gs-view__window__frame__control__pages">
                            <button className="gs-view__window__frame__control__pages__btn"></button>
                            <button className="gs-view__window__frame__control__pages__btn"></button>
                            <span className="gs-view__window__frame__control__pages__state">1/2</span>
                            <button className="gs-view__window__frame__control__pages__btn"></button>
                            <button className="gs-view__window__frame__control__pages__btn"></button>
                        </div>
                        <button className="gs-view__window__frame__control__screen"></button>
                    </div>
                    <div className="gs-view__window__frame__content"></div>
                </div>
            </div>
            <div className="gs-view__form"></div>
        </div>
    );
}
export default View;