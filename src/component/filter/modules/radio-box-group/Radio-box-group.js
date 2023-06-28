import "./Radio-box-group.scss";
import RadioBox from "../radio-box/Radio-box";
import SelectPeriod from "../select-period/Select-period";

function RadioBoxGroup({data}){
    let optionInput;

    if(data.optionInput){
        if(data.optionInput.name === 'selectPeriod'){
            optionInput = (
                <SelectPeriod data={data.optionInput}></SelectPeriod>
            );
        } else {
            optionInput = null;
        }

    } else {
        optionInput = null;
    }
    return(
        <div className="gs-radio-box-group">
            { data.list.map(function(item) {
                return <RadioBox key={item.label} inputName={data.name} inputData={item}></RadioBox>
            })
            }{optionInput}
        </div>
    );
} export default RadioBoxGroup;