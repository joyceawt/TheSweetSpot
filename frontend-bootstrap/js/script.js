'use strict'




//global variables. not a good practice but it will do here:
let validateInputs = {
    "drinkName": false,
    "drinkDescription": false,
    "drinkPrice": false
  }

//to store which data is selected for edit or deletion
let selectedId= -1;

// TEMPORARY until DB is connected. only used for client side adding and deleting.
let childCount = 3;

function getResultsTable(){

}

function inputValidator(arg, obj){
    let check = document.getElementById(arg).value;
    if(arg =="add-drink-name"){
        if(check.length >0){
            validateInputs.drinkName=true;
        }else{
            validateInputs.drinkPrice=false;
        }
    }

    if (arg =="add-description"){
        if(check.length >0){
            validateInputs.drinkDescription=true;
        }else{
            validateInputs.drinkPrice=false;
        }
    }


    if(arg =="add-price"){
        if(check.length >0){
            validateInputs.drinkPrice=true;
        }else{
            validateInputs.drinkPrice=false;
        }
    }


    //if all of validateInputs, enable add item button.
    if ( validateInputs.drinkName== true && validateInputs.drinkDescription== true && validateInputs.drinkPrice== true ){
        document.getElementById("add-new-drink-btn").disabled = false; 

    }else{//otherwise, ensure the add button is disabled. 
        document.getElementById("add-new-drink-btn").disabled = true; 
    }
    

}
function selectData(idName){
    console.log(idName);
}

function addStaticDataForTest(drinkName, drinkDescription, drinkPrice){

    let drinkData = document.createElement('div');

}

function optionButtonClicked(obj){
    // set the selectedID to whatever is clicked.
    selectedId = obj.getAttribute("id");
    console.log("i was clicked from this:", selectedId);
    
}


function cancelButtonClicked(){
    console.log("cancelled selected item: ", selectedId);
    // unselect.
    selectedId = -1;
}

async function deleteButtonClickedYes(){

    //document.getElementById("content-5").parentElement.id 
    let targetID = "content-" + selectedId;

    console.log(targetID);
    let parent_Node = document.getElementById("mainContent");
    let target_Node = document.getElementById(targetID);
    let test = parent_Node.removeChild(target_Node);

    // unselect.
    selectedId=-1;


    // PLACE CODE HERE TO DELETE IN BACKEND
}


async function editButtonClicked(event){
    event.preventDefault(); 
    console.log("now editing... " , selectedId);

}

async function addButtonClicked(event){
    //prevent default event.
    event.preventDefault(); 
    let drinkName = document.getElementById("add-drink-name").value;
    let drinkDescription = document.getElementById("add-description").value;
    let drinkPrice = document.getElementById("add-price").value;

    // DOUBLE CHECKER. entry CANNOT be null. 
    if( drinkName == '' || drinkDescription =='' || drinkPrice==''){
        return;
    }

    let url='/addNewDrinkEntry';

    //change text of button to 'loading'
    document.getElementById("add-new-drink-btn").innerHTML =`
    <div class="spinner-border spinner-border-sm" role="status">
        
    </div>
    `;


   // let buttonID = event.target.getAttribute('id');


    //let picture = document.getElementById("add-drink-name").value;

    //replace the content of the button to 'loading' icon..

    //fetch from appropriate url whic is /addNewDrinkEntry
    
    
    let entryObject = {
        "drinkName": drinkName,
        "drinkDescription": drinkDescription,
        "drinkPrice": drinkPrice
    };

    let urlEncodedObj = new URLSearchParams();
    urlEncodedObj.append("drinkName", drinkName);
    urlEncodedObj.append("drinkDescription", drinkDescription);
    urlEncodedObj.append("drinkPrice", drinkPrice);

    //console.log(entryObject);

    let addDrinkModal = document.getElementById('addDrinkModal');
    let modal = bootstrap.Modal.getInstance(addDrinkModal);


    childCount= childCount+1;
    let newTargetID = "content-" + childCount;


    // document.getElementById("content-3").parentElement.id
    //let parent_Node = document.getElementById("mainContent");
    let newDrinkNode = document.createElement('article');
    newDrinkNode.setAttribute("class", "d-flex flex-row align-content-center justify-content-center rounded bg-white p-1");
    newDrinkNode.setAttribute("id",`content-${childCount}`);

    
    
    newDrinkNode.innerHTML=`
        <!-- Boba Picture -->
        <div class="p-2 d-flex justify-content-center align-content-center">
            <img id ="img-00${childCount}" src="../public/Images/boba.png" >
        </div>

        <!-- TABLE of information: drink Name, ID, description and price..-->
            <table class="table table-sm">
                <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <td id="name-003">${drinkName}</td>
                </tr>
                <tr>
                    <th scope="row">ID</th>
                    <td id="id-003">00${childCount}</td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td id="drinkDescription-00${childCount}">${drinkDescription}</td>

                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td id="drinkPrice-00${childCount}">$${drinkPrice}</td>

                </tr>
                </tbody>
            </table>

        <!-- buttons -->
        <div class="p-2 d-flex flex-column justify-content-evenly align-content-center">
            <!-- EDIT -->
            <button class="btn btn-outline-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editEntryModal" id=${childCount} onclick="optionButtonClicked(this)"><i class="bi bi-pencil-square fs-3"></i></button>
            <!-- DELETE -->
            <button class="btn btn-outline-danger" type="button" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal" id=${childCount} onclick="optionButtonClicked(this)"><i class="bi bi-x-lg fs-3"></i></button>
        </div>
    `



    //add error into html.
    document.getElementById("mainContent").append(newDrinkNode)

    document.getElementById("add-new-drink-btn").innerHTML =`Add item`
    modal.hide();
    

    /***** UNCOMMENT OUT THE SECTION BELOW WHEN IT'S TIME TO CONNECT TO BACK END. 

    return fetch(url,
        {
            method: "POST",
            body: urlEncodedObj,
            //headers: {"Content-Type": "application/x-www-form-urlencoded"}
          }
    )                              
        .then(response => {
               //if succesfull, then close this modal. 
               if(response.status==201){
                document.getElementById("add-new-drink-btn").innerHTML =`Add item`
                modal.hide();

                //disable the add button.
                document.getElementById("add-new-drink-btn").disabled = true; 

                //clear out any contents if there was any left.
                document.getElementById("add-drink-name").value ="";
                document.getElementById("add-description").value ="";
                document.getElementById("add-price").value ="";


                //make the validation table all false again!
                validateInputs.drinkName== false;
                validateInputs.drinkDescription== false;
                validateInputs.drinkPrice== false;
        
               }else{
                //console.log("Please try again later.");
                    
                document.getElementById("add-new-drink-btn").innerHTML =`Add item`
                //If toast is preferred, then uncomment out this section out
                //let alertEditOrAddError = document.getElementById('toast-add-error');//select id of toast
                //let toastAlert = new bootstrap.Toast(alertEditOrAddError);//inizialize it
                //toastAlert.show(); //show error toast

                
      
                let errModalChild = document.createElement('div');
                errModalChild.innerHTML=`
                <div class="alert alert-danger p-3 d-flex" role="alert">
                    <div class="me-auto">Could not add entry. Try again later. </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`

                let modalContent =  document.getElementById('modal-content');

                //add error into html.
                modalContent.appendChild(errModalChild)

               }
            }
        )     
        //.then(data =>  { })     
        .catch(error => console.error(error));
    ******/
}



// add event listeners.
document.addEventListener("DOMContentLoaded", function(event) {
    const addEntry =  document.getElementById('add-new-drink-btn');
    addEntry.addEventListener('click', addButtonClicked);
});
