import React from 'react';

function DropDownMenuList({Args}) {
    
    return (
        <div class="dropdown me-auto p-1">
        <button class="btn" type="button" data-bs-toggle="dropdown"  aria-expanded="false"> <i class="bi bi-filter fs-5"></i></button>
        <div class="dropdown-menu">
            <li><h6 class="dropdown-header">Sort by</h6></li>
            <li><a class="dropdown-item" href="#">...</a></li>
            <li><a class="dropdown-item" href="#">...</a></li>
            <li><a class="dropdown-item" href="#">...</a></li>
        </div>
        </div>
    );
}

export default DropDownMenuList;



