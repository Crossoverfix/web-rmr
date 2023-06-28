import "./Check-box-group.scss";
import CheckBox from "../check-box/Check-box";

function CheckBoxGroup({data}){
    return(
        <div className="gs-check-box-group">
            { data.list.map(function(item) {
                return <CheckBox key={item.label} inputName={data.name} inputData={item}></CheckBox>
            })
            }
        </div>
    );
} export default CheckBoxGroup;