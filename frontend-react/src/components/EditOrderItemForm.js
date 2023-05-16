import React from "react";

function EditOrderItemForm({ orderItem, onClickAction, setOI_orderID, setOI_drinkID, setOI_drinkQuantity, setOI_iceLvl, setOI_sugarLvl, setOI_dairyOpt, setOI_bobaOpt }) {

  // setting these because each button needs a unique name and id.
  // for the names
  let uniqueIceID = "iceLevelEditOrderItem-" + orderItem.order_id ;
  let uniqueSugarID = "sugarLevelEditOrderItem"+ orderItem.order_id ;
  let uniqueDairyOpt = "dairyOptionEditOrderItem"+ orderItem.order_id ;
  let uniqueBoba = "bobaOptionEditOrderItem"+ orderItem.order_id ;

  // just actual ID
  let unIce100 = "iceLevelOrdIt100-" + orderItem.order_id ;
  let unIce50 = "iceLevelOrdIt50-" + orderItem.order_id ;
  let unIce0 = "iceLevelOrdIt0-" + orderItem.order_id ;
  let unSugar100 = "sugarLevelOrdIt100-" + orderItem.order_id ;
  let unSugar50 = "sugarLevelOrdIt50-" + orderItem.order_id ;
  let unSugar0 = "sugarLevelOrdIt0-" + orderItem.order_id ;
  let unDairyY = "dairyOptionOrdItY-" + orderItem.order_id ;
  let unDairyN = "dairyOptionOrdItN-" + orderItem.order_id ;
  let unBobaY = "bobaOptionOrdItY-" + orderItem.order_id ;
  let unBobaN = "bobaOptionOrdItN-" + orderItem.order_id ;



  return (
    <>
      <form className="needs-validation">
        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Order ID:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="edit-OrderItem-Order-ID"
            defaultValue={orderItem.order_id}
            onChange={(e)=>setOI_orderID(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Drink ID:
          </label>
          <input
            type="text"
            className="form-control bg-transparent"
            id="edit-OrderItem-Drink-ID"
            defaultValue={orderItem.drink_id}
            onChange={(e)=>setOI_drinkID(e)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="addItem-customer-ID" className="col-form-label">
            Drink Qty:
          </label>
          <input
            type="number"
            className="form-control bg-transparent"
            id="edit-OrderItem-Drink-QTY"
            defaultValue={orderItem.drink_quantity}
            onChange={(e)=>setOI_drinkQuantity(e)}
            required
          />
        </div>

        <div className="mb-3 pt-2">
          <label
            htmlFor={uniqueIceID}
            className="col-form-label w-25"
          >
            Ice level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name={uniqueIceID}
              value="1"
              id={unIce100}
              onChange= {(e)=>setOI_iceLvl(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unIce100}
            >
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueIceID}
              value="0.5"
              id={unIce50}
              onChange= {(e)=>setOI_iceLvl(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unIce50}
            >
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueIceID}
              value="0"
              id={unIce0}
              onChange= {(e)=>setOI_iceLvl(e)}
            />
            <label className="btn btn-outline-primary" htmlFor={unIce0}>
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label
            htmlFor={uniqueSugarID}
            className="col-form-label w-25"
          >
            Sugar level:
          </label>
          <div className="btn-group">
            <input
              className="btn-check"
              type="radio"
              name={uniqueSugarID}
              value="1"
              id={unSugar100}
              onChange= {(e)=>setOI_sugarLvl(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unSugar100}
            >
              100%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueSugarID}
              value="0.5"
              id={unSugar50}
              onChange= {(e)=>setOI_sugarLvl(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unSugar50}
            >
              50%
            </label>

            <input
              className="btn-check"
              type="radio"
              name={uniqueSugarID}
              value="0"
              id= {unSugar0}
              onChange= {(e)=>setOI_sugarLvl(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unSugar0}
            >
              0%
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2">
          <label
            htmlFor={uniqueDairyOpt}
            className="col-form-label w-25"
          >
            Dairy Option:
          </label>
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name={uniqueDairyOpt}
              id={unDairyY}
              value="1"
              onChange= {(e)=>setOI_dairyOpt(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unDairyY}
            >
              Dairy
            </label>

            <input
              type="radio"
              className="btn-check"
              name={uniqueDairyOpt}
              id={unDairyN}
              value="0"
              onChange= {(e)=>setOI_dairyOpt(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unDairyN}
            >
              Non-dairy
            </label>
          </div>
        </div>

        <div className="mb-3 pt-2 ">
          <label
            htmlFor={uniqueBoba}
            className="col-form-label  w-25"
          >
            Boba Option:
          </label>

          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              name={uniqueBoba}
              id={unBobaY}
              value="1"
              onChange= {(e)=>setOI_bobaOpt(e)}
            />
            <label
              className="btn btn-outline-primary"
              htmlFor={unBobaY}
            >
              Yes
            </label>

            <input
              type="radio"
              className="btn-check"
              name={uniqueBoba}
              id={unBobaN}
              value="0"
              onChange= {(e)=>setOI_bobaOpt(e)}
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={unBobaN}
            >
              No
            </label>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onClickAction(orderItem.order_items_id)}
          >
            {" "}
            Save{" "}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditOrderItemForm;
