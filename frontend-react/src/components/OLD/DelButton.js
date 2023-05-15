import React, {useEffect} from 'react';

function DelButton({onDeleteDrinks, drinkList, id, optionalName}) {
    //when db is connected, use drinkList and onDeleteDrinks properly. 
    let drinkID = {id}.id
    let drinkName = {optionalName}.optionalName

    let name = "entry";
    function deleteButtonClickedYes(obj){
        console.log("deleting: ", drinkID);
        //onDeleteDrinks(drinkID);
    }

    function loadPreset(){
        console.log("[populated deletebtn", drinkID, "]");
        console.log("[name: ", drinkName, "]");
        if ( drinkName !== ""){
            name = optionalName;
        }
        
    }

    
    useEffect(() => {
        loadPreset();
      }, []);
   
    
    return (
        <>
            <button class="btn btn-outline-danger" type="button" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" id={drinkID.id} onclick="selectButtonClicked(this)"><i class="bi bi-x-lg fs-3"></i></button>  

            <div class="modal " id="confirmDeleteModal" tabindex="-1" aria-labelledby="Confirm delete?" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Delete {name}?
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => deleteButtonClickedYes(this)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DelButton;

