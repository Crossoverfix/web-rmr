import "./Select-checkbox-list.scss";


function SelectCheckboxList({data}){
    console.log(data);
    return(
        <div className="gs-select-cl">
            <div className="gs-select-cl__search"></div>
            <div className="gs-select-cl__list"></div>
            <div className="gs-select-cl__control"></div>
        </div>
    );
} export default SelectCheckboxList;