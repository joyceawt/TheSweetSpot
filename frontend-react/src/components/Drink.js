import React, { useState } from "react";
import bobaPic from "../data/images/boba_unknownartist.png";
import { ModalComponent, EditDrinkForm, DeleteConfirm } from "./index";

function Drink({ drink, onEditDrink, onDeleteDrink }) {
  // set up unique IDs
  let id = drink.drink_id;
  let drinkName = "name-" + id;
  let drinkID = "id-" + id;
  let drinkDescription = "drinkDescription-" + id;
  let drinkPrice = "drinkPrice-" + id;

  let modalEdit = "edit-entry-" + id;
  let modalDelete = "delete-confirm-" + id;

  // states
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      <article className="d-flex flex-row align-content-center justify-content-center rounded bg-white">
        <div className="p-2 d-flex justify-content-center align-content-center">
          <img id="img-1" alt="boba-drink" src={bobaPic} />
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
                {id}
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
        <div className="p-4 d-flex flex-column justify-content-evenly align-content-center">
          <ModalComponent
            trigger={modalEdit}
            buttonName={<i className="bi bi-pencil-square fs-3" />}
            btnClasses="mt-3 btn btn-light"
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            content={
              <EditDrinkForm
                drinkItem={drink}
                onClickAction={onEditDrink}
                setShowModal={setShowEditModal}
              />
            }
            title="Edit drink"
          />

          <ModalComponent
            trigger={modalDelete}
            buttonName={<i className="bi bi-trash fs-3" />}
            btnClasses="mt-3 btn btn-light"
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
            content={
              <DeleteConfirm
                actionOnClick={onDeleteDrink}
                id={id}
                setShowModal={setShowDeleteModal}
              />
            }
            title="Delete Drink?"
          />
        </div>
      </article>
    </>
  );
}

export default Drink;
