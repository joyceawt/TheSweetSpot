// model this after SubscriptionRow
import React from "react";
import bobaPic from "../data/images/boba_unknownartist.png";
import Modal from "./Modal";
import EditDrinkForm from "./EditDrinkForm";
import DeleteConfirm from "./DeleteConfirm";

function Drink({ drink, onEditDrink, onDeleteDrink }) {
  let id = drink.drink_id;
  let drinkName = "name-" + drink.drink_id;
  let drinkID = "id-" + drink.drink_id;
  let drinkDescription = "drinkDescription-" + drink.drink_id;
  let drinkPrice = "drinkPrice-" + drink.drink_id;

  // NEED UNIQUE ID for each modal! this is to assign each drink a unique modal.
  let modalEdit = "edit-entry-" + drink.drink_id;
  let modalDelete = "delete-confirm-" + drink.drink_id;

  return (
    <>
      <article className="d-flex flex-row align-content-center justify-content-center rounded bg-white">
        <div className="p-2 d-flex justify-content-center align-content-center">
          <img id="img-1" src={bobaPic} />
        </div>

        <table className="table table-sm">
          <tbody>
            <tr>
              <th scope="row" style={{ width: "10%" }}>
                Name
              </th>
              <td id={drinkName} style={{ wordWrap: "break-word" }}>
                {drink.drink_name}
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ width: "10%" }}>
                ID
              </th>
              <td id={drinkID} style={{ wordWrap: "break-word" }}>
                {drink.drink_id}
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ width: "10%" }}>
                Description
              </th>
              <td id={drinkDescription} style={{ wordWrap: "break-word" }}>
                {drink.drink_description}
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ width: "10%" }}>
                Price
              </th>
              <td>
                $
                <span id={drinkPrice} style={{ wordWrap: "break-word" }}>
                  {drink.drink_price}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-2 d-flex flex-column justify-content-evenly align-content-center">
          <Modal
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-3" />}
            btnClasses="btn btn-light btn-outline-primary"
            content={
              <EditDrinkForm drinkItem={drink} onClickAction={onEditDrink} />
            }
            title="Edit drink"
          />

          <Modal
            trigger={modalDelete}
            buttonName={<i className="bi bi-x-lg fs-3" />}
            btnClasses="btn btn-outline-danger"
            content={
              <DeleteConfirm
                actionOnClick={onDeleteDrink}
                id={drink.drink_id}
              />
            }
            title="Delete Entry?"
          />
        </div>
      </article>
    </>
  );
}

export default Drink;
