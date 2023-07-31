import React from "react";
import {render} from "@testing-library/react";

function BlockWrap ({dropOption},{content}){
    let contentRef = React.createRef();
    const toggleShow = (ref) => {
        ref.current.classList.toggle('show');
    }
    render(
        <div className="gs-view__form__block">
            <div className="gs-view__form__block__header">
                <span className="gs-view__form__block__header__title">Ознакомление</span>
                <div className="gs-view__form__block__header__toggler icon__pages-p" onClick={() => toggleShow(contentRef)}></div>
                <div className="gs-view__form__block__header__option-bar">
                    {dropOption}
                </div>
            </div>
            <div ref={contentRef} className="gs-view__form__block__content show">
                {content}
            </div>
        </div>
    )
}
export default BlockWrap;