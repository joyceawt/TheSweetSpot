import React, {useState} from 'react';

function AddButton({addModalName, page}) {
    let result = typeof {page};
    let res = page.toString();

    const [name, setName]   = useState('');
    const [cost, setCost]   = useState('');
    const [description, setDescription] = useState('');
 


    if(res === "drinks"){
        return (
            <>
            <div class="p-1 d-inline-flex">
                <button class="btn btn-light btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#{addModalName}">     
                    <i class="bi bi-plus-lg fs-3"/>
                </button>
            </div>
    
            <div className="modal fade" id="{addModalName}" tabindex="-1" aria-labelledby="addDrink" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content bg-white" id="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="addDrink">Add a new drink! </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                        <div>
                        Please fill in all of the required information below to add a new entry.
                        </div>
                    </div>
                    <form className="needs-validation" > 
                        <div className="mb-3">
                        <label for="add-drink-name" className="col-form-label">Drink Name:</label>
                        <input type="text" className="form-control bg-transparent" id="add-drink-name" autofocus="autofocus"  required /> 
                        </div>
    
    
                        <div className="mb-3">
                        <label for="add-description" className="col-form-label">Description:</label>
                        <textarea className="form-control bg-transparent" id="add-description"  autofocus="autofocus"  required />
                        </div>
    
    
                        <div className="mb-3">
                            <label for="add-price" className="col-form-label">Price:</label>
                            <div className="input-group">
                            <span className="input-group-text ">$</span><input type="text" className="form-control bg-transparent" id="add-price" autofocus="autofocus"  required />
                            </div>
                        </div>
    
    
                        <div className="modal-footer ">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cancel</button>
                        <button type="submit" className="btn btn-primary" id="add-new-drink-btn">Add item</button>
                        </div>
                    </form>
                    </div>
    
                </div>
                </div>
                </div>
            </>
        );
    } else if( res === "orders"){
        return(
            <>
            <div class="p-1 d-inline-flex">
                <button class="btn btn-light btn-outline-primary" type="button" data-bs-toggle="modal" data-bs-target="#{addModalName}">     
                    <i class="bi bi-plus-lg fs-3"/>
                </button>
            </div>
    
            <div class="modal fade" id="{addModalName}" tabindex="-1" aria-labelledby="addOrderModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-white">
                        <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addOrderModal">Add order information </h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="needs-validation" action="/addNewOrder" method="post" >
                                
                                <div class="mb-3">
                                <label for="add-customer-ID" class="col-form-label">Customer ID:</label>
                                <input type="text" class="form-control bg-transparent" id="add-customer-ID" required />
                                </div>

                            
                                <div class="mb-3">
                                <label for="add-description" class="col-form-label">Customer Name:</label>
                                <textarea class="form-control bg-transparent" id="add-description" required/>
                                </div>

                                
                                <div class="mb-3">
                                    <label for="add-date" class="col-form-label">Order date:</label>
                                    <input type="text" class="form-control bg-transparent" id="add-date" required />
                                </div>


                                
                                <div class="mb-3">
                                    <label for="add-total-items" class="col-form-label">Items total:</label>
                                    <input type="text" class="form-control bg-transparent" id="add-total-items" required/>
                                </div>

                                
                                <div class="mb-3">
                                    <label for="add-total-price" class="col-form-label">Total price:</label>
                                    <input type="number" class="form-control bg-transparent" id="add-total-price" required />
                                </div>

                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            
            </>

        )
        

    }else if( res === "orderitems"){

    }else if( res === "customers"){

    }else{
        return (
         <>
            <p>No Optn: {page}| Type: {result}</p>
 
        </>
        )
    }
 
}

export default AddButton;



