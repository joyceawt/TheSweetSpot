import React from 'react';

function AddCustomerForm() {
    
    return (
       <>
        <form className="needs-validation" >
            <div className="mb-3">
              <label for="add-description" className="col-form-label">Customer Name:</label>
              <input className="form-control bg-transparent" id="add-description" required />
            </div>

            <div className="mb-3">
                <label for="add-date" className="col-form-label">Phone number</label>
                <input type="text" className="form-control bg-transparent" id="add-date" required />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Add</button>
            </div>  
        </form>

       </>
    );
}

export default AddCustomerForm;