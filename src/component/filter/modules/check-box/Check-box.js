import "./Check-box.scss"

function CheckBox({inputName,inputData}){
    return(
        <label className="gs-check-box">
            <input type="checkbox" name={inputName} value={inputData.value}/>
            <div className="gs-check-box__icon">
                <div className="icon__check gs-icon"></div>
            </div>
            <span className="gs-check-box__title">{inputData.label}</span>
        </label>
    );
}
export default CheckBox;