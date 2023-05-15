import React from 'react';

import SearchBar from './SearchBar'
import DropDownMenuList from './DropDownMenuList';
function UtilityBar({contentTitle, addModal}) {

    return (
       <>
        <div className="d-flex pt-3">
            <div className="pt-4 "><h4><strong>{contentTitle}</strong></h4></div>
            <div className="pt-3"> <DropDownMenuList /> </div>
            <div className="ms-auto pt-1"> <SearchBar/> </div>
            <div className="pt-3 pe-2"> {addModal} </div>
        </div>
       </>
    );
}

export default UtilityBar;