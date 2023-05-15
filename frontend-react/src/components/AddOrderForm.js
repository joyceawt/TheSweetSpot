import React from 'react';

function AddOrderForm() {
    //action="/add-new-order" method="post"
    return (
       <>
       <form className="needs-validation"  >
            <div className="mb-3">
              <label for="add-customer-ID" className="col-form-label">Customer ID:</label>
              <input type="text" className="form-control bg-transparent" id="add-customer-ID" required /> 
            </div>

            <div className="mb-3">
                <label for="add-date" className="col-form-label">Order date:</label>
                <input type="text" className="form-control bg-transparent" id="add-date" required />
            </div>


            <div className="mb-3">
                <label for="add-total-price" className="col-form-label">Total price:</label>
                <input type="number" className="form-control bg-transparent" id="add-total-price" required />
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">Add</button>
            </div>    
          </form>
       </>
    );
}

export default AddOrderForm;