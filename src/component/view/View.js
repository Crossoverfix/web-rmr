import './View.scss';
import React from "react";
import {Button, Menu, MenuItem } from "@mui/material";


function View({data}){
    console.log(data);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    let contentRef = React.createRef();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (val) => {
        if(val){
            console.log(val);
        }
        setAnchorEl(null);
    };
    const toggleShow = (ref) => {
        ref.current.classList.toggle('show');
    }

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
                        <div className="gs-view__form__block__header__toggler icon__pages-p" onClick={() => toggleShow(contentRef)}></div>
                        <div className="gs-view__form__block__header__option-bar">
                            <div className="gs-view__form__block__header__option-bar__drop-option">
                                <Button
                                    className="gs-drop-option-btn"
                                    aria-controls={open ? '.gs-drop-option-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <div className="gs-icon icon__drop-option"></div>
                                </Button>
                                <Menu
                                    className="gs-drop-option-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={() => handleClose(0)}
                                    MenuListProps={{
                                        'aria-labelledby': '.gs-drop-option-btn',
                                    }}
                                >
                                    <MenuItem onClick={() => handleClose(1)}>Переговорить</MenuItem>
                                    <MenuItem onClick={() => handleClose(2)}>Вернуть в секретариат</MenuItem>
                                    <MenuItem onClick={() => handleClose(3)}>На ознакомление по списку</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <div ref={contentRef} className="gs-view__form__block__content show">
                        <button className="gs-view__form__btn btn-accept">
                            <span>Ознакомлен</span>
                        </button>
                        <button className="gs-view__form__btn btn-ghost">
                            <div className="gs-icon icon__search-add--mask"></div>
                            <span>Создать поручение</span>
                        </button>
                    </div>
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