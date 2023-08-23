import React from "react";

// function ModalChangeEvent({ handleClose, handleSave, setEditedItem, editedItem, addNewEvent }) {
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditedItem((prevItem) => ({
//       ...prevItem,
//       [name]: value,
//     }));
//   };

function ModalChangeEvent({
  handleClose,
  handleSave,
  setEditedItem,
  editedItem,
  addNewEvent,
}) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className={`modal show`}
        tabIndex="-1"
        role="dialog"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="modal-dialog w-100">
          <div className="modal-content p-2">
            <div className="modal-header">
              <h5 className="modal-title">{`${
                addNewEvent ? "Create" : "Edit"
              } Item`}</h5>
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group mb-2 d-flex flex-column align-items-start">
                  <label className="fs-5 mb-1">Speaker</label>
                  <input
                    type="text"
                    className="form-control"
                    name="speaker"
                    value={editedItem.speaker}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-2 d-flex flex-column align-items-start">
                  <label className="fs-5 mb-1">Speech Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="speechTitle"
                    value={editedItem.speechTitle}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-2 d-flex flex-column align-items-start">
                  <label className="fs-5 mb-1">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    value={editedItem.price}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-2 d-flex flex-column align-items-start">
                  <label className="fs-5 mb-1">Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="date"
                    value={editedItem.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mb-2 d-flex flex-column align-items-start">
                  <label className="fs-5 mb-1">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={editedItem.description}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop show`}></div>
    </>
  );
}

export default ModalChangeEvent;
