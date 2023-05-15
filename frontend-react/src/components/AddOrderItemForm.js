import React from 'react';

function AddOrderItemForm() {
    //action="/add-new-order-item" method="post"
    return (
       <>
        <form className="needs-validation" >
            <div className="mb-3">
              <label for="addItem-customer-ID" className="col-form-label">Order ID:</label>
              <input type="text" className="form-control bg-transparent" id="addItem-customer-ID" required />
            </div>

            <div className="mb-3">
              <label for="addItem-customer-ID" className="col-form-label">Drink ID:</label>
              <input type="text" className="form-control bg-transparent" id="addItem-customer-ID" required/>
            </div>

            <div className="mb-3">
              <label for="addItem-customer-ID" className="col-form-label">Drink Qty:</label>
              <input type="number" className="form-control bg-transparent" id="addItem-customer-ID" required/>
            </div>

            <div className="mb-3 pt-2">
            <label for="iceLevel" class="col-form-label w-25">Ice level:</label>
            <div class="btn-group">
                <input class="btn-check" type="radio" name="iceLevel" value="1" id="iceLevel100" checked />
                <label class="btn btn-outline-primary" for="iceLevel100">
                  100%
                </label>

                <input class="btn-check" type="radio" name="iceLevel" value="0.5" id="iceLevel50"  />
                <label class="btn btn-outline-primary" for="iceLevel50">
                  50%
                </label>

                <input class="btn-check" type="radio" name="iceLevel" value=".25" id="iceLevel0" />
                <label class="btn btn-outline-primary" for="iceLevel0">
                  0%
                </label>
             </div>
            </div>


            <div className="mb-3 pt-2">
            <label for="sugarLevel" className="col-form-label w-25">Sugar level:</label>
              <div class="btn-group">
                <input class="btn-check" type="radio" name="sugarLevel" value="1" id="sugarLevel100" checked />
                <label class="btn btn-outline-primary" for="sugarLevel100">
                  100%
                </label>

                <input class="btn-check" type="radio" name="sugarLevel" value="0.5" id="sugarLevel50"  />
                <label class="btn btn-outline-primary" for="sugarLevel50">
                  50%
                </label>

                <input class="btn-check" type="radio" name="sugarLevel" value=".25" id="sugarLevel0" />
                <label class="btn btn-outline-primary" for="sugarLevel0">
                  0%
                </label>
             </div>

            </div>

            <div className="mb-3 pt-2">
              <label for="dairyOption" className="col-form-label w-25">Dairy Option:</label>
              <div class="btn-group">
                <input type="radio" className="btn-check" name="dairyOption" id="dairyOptionYes" value= "1" checked />
                <label className="btn btn-outline-primary" for="dairyOptionYes">Dairy</label>

                <input type="radio" class="btn-check" name="dairyOption" id="dairyOptionNo" value = "0"  />
                <label className="btn btn-outline-primary" for="dairyOptionNo">Non-dairy</label>
              </div>
            </div>

            <div className="mb-3 pt-2 ">
              <label for="bobaOption" className="col-form-label  w-25">Boba Option:</label>

              <div class="btn-group">
                <input type="radio" className="btn-check" name="bobaOption" id="bobaOptionYes"  value= "1" checked />
                <label className="btn btn-outline-primary" for="bobaOptionYes">Yes</label>

                <input type="radio" className="btn-check" name="bobaOption" id="bobaOptionNo" value = "0"  />
                <label className="btn btn-outline-secondary" for="bobaOptionNo">No</label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </form>
       </>
    );
}

export default AddOrderItemForm;