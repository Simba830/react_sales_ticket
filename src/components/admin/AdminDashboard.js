import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../store/AppContext";
import { ProductTicket } from "./ProductTicket";
import ModalChangeEvent from "./ModalChangeEvent";

function AdminDashboard() {
  const navigation = useNavigate();
  const { authToken, events, setEvents } = useContext(AppContext);

  const [show, setShow] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [addNewEvent, setAddNewEvent] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteEvent = (idToRemove) => {
    setEvents((prev) => prev.filter(event => event.id !== idToRemove));
  }

  const handleClickAddEvent = () => {
    handleShow();
    setEditedItem({
      id: Math.max(...events.map((event) => event.id)) + 1,
      speaker: "",
      speechTitle: "",
      date: "",
      price: "",
      description: "",
    });
    setAddNewEvent(true);
  };

  const handleEditEventSave = () => {
    setEvents((prev) =>
      prev.map((product) => {
        if (product.id === editedItem.id) {
          return editedItem;
        }

        return product;
      })
    );
    handleClose();
  };

  const handleAddNewEvent = () => {
    setEvents((prev) => [...prev, editedItem]);
    handleClose();
  };

  useEffect(() => {
    if (!authToken) {
      navigation(-1);
    }
  }, [authToken, navigation]);

  return (
    <div className="container-fluid text-center mb-5 mt-5">
      <div className="d-flex flex-row justify-content-center align-items-center mb-4">
        <h1>Admin Dashboard</h1>
        <button
          className="d-flex justify-content-center align-items-center btn btn-secondary rounded-circle ms-2"
          style={{
            width: 30,
            height: 30,
            border: 0,
            backgroundColor: "#F5F5F5",
            color: "black",
          }}
          onClick={handleClickAddEvent}
        >
          +
        </button>
      </div>
      <div className="flex-column d-flex justify-content-center" style={{ paddingLeft: "10%" }}>
        {events.map((ticket) => (
          <div key={ticket.id} className="col-md-4 mb-4">
            <ProductTicket
              {...ticket}
              setEditedItem={setEditedItem}
              setShow={setShow}
              setAddNewEvent={setAddNewEvent}
              handleDeleteEvent={handleDeleteEvent}
            />
          </div>
        ))}
        {show && (
          <ModalChangeEvent
            handleClose={handleClose}
            handleSave={addNewEvent ? handleAddNewEvent : handleEditEventSave}
            setEditedItem={setEditedItem}
            editedItem={editedItem}
            addNewEvent={addNewEvent}
          />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
