import './View.scss'
import React from "react";;

function View({data}){
    console.log(data);

    return(
        <div className="gs-view">
            <div className="gs-view__window">
                <div className="gs-view__window__preview gs-scroll-slim">
                    <div className="gs-view__window__preview__object active">
                        <div className="gs-view__window__preview__object__content">
                            <img src="https://cyberleninka.ru/viewer_images/16196826/f/1.png"/>
                        </div>
                        <span className="gs-view__window__preview__object__number">1</span>
                    </div>
                    <div className="gs-view__window__preview__object">
                        <div className="gs-view__window__preview__object__content">
                            <img src="https://cyberleninka.ru/viewer_images/16196826/f/1.png"/>
                        </div>
                        <span className="gs-view__window__preview__object__number">3</span>
                    </div>
                    <div className="gs-view__window__preview__object">
                        <div className="gs-view__window__preview__object__content">
                            <img src="https://cyberleninka.ru/viewer_images/16196826/f/1.png"/>
                        </div>
                        <span className="gs-view__window__preview__object__number">4</span>
                    </div>
                    <div className="gs-view__window__preview__object">
                        <div className="gs-view__window__preview__object__content">
                            <img src="https://cyberleninka.ru/viewer_images/16196826/f/1.png"/>
                        </div>
                        <span className="gs-view__window__preview__object__number">5</span>
                    </div>
                </div>
                <div className="gs-view__window__frame">
                    <div className="gs-view__window__frame__control">
                        <div className="gs-view__window__frame__control__pages">
                            <button className="gs-view__window__frame__control__pages__btn icon__pages-pp" disabled></button>
                            <button className="gs-view__window__frame__control__pages__btn icon__pages-p" disabled></button>
                            <span className="gs-view__window__frame__control__pages__state">1/2</span>
                            <button className="gs-view__window__frame__control__pages__btn icon__pages-n"></button>
                            <button className="gs-view__window__frame__control__pages__btn icon__pages-nn"></button>
                        </div>
                        <button className="gs-view__window__frame__control__screen icon__full-screen"></button>
                    </div>
                    <div className="gs-view__window__frame__content gs-scroll-slim">
                        <img src="https://cyberleninka.ru/viewer_images/16196826/f/1.png"/>
                    </div>
                </div>
            </div>
            <div className="gs-view__form">
                <div className="gs-view__form__block">
                    <div className="gs-view__form__block__header">
                        <span className="gs-view__form__block__header__title">Ознакомление</span>
                        <div className="gs-view__form__block__header__toggler icon__pages-p"></div>
                        <div className="gs-view__form__block__header__option-bar"></div>
                    </div>
                    <div className="gs-view__form__block__content"></div>
                </div>
                <div className="gs-view__form__block">
                    <div className="gs-view__form__block__header">
                        <span className="gs-view__form__block__header__title">Ознакомление</span>
                        <div className="gs-view__form__block__header__toggler"></div>
                        <div className="gs-view__form__block__header__option-bar"></div>
                    </div>
                    <div className="gs-view__form__block__content"></div>
                </div>
            </div>
        </div>
    );
}
export default View;