import "./Radio-box.scss"

function RadioBox({inputName,inputData}){
    return(
        <label className="gs-radio-box">
            <input type="radio" name={inputName} value={inputData.value}/>
            <div className="gs-radio-box__icon">
                <div className="gs-icon"></div>
            </div>
            <span className="gs-radio-box__title">{inputData.label}</span>
        </label>
    );
}
export default RadioBox;