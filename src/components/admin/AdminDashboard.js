import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../store/AppContext";
import { ProductTicket } from "./ProductTicket";
import { getAllProducts } from "../../api/products";

function AdminDashboard() {
  const navigation = useNavigate();
  const { authToken, products, setProducts } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const [editedItem, setEditedItem] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.id === editedItem.id) {
          return editedItem;
        }

        return product;
      })
    );
    handleClose();
  };

  useEffect(() => {
    if (!authToken) {
      navigation(-1);
    }
  }, [authToken, navigation]);

  return (
    <div className="container-fluid text-center mb-5 mt-5">
      <div className="d-flex flex-row justify-content-center align-items-center">
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
        >
          +
        </button>
      </div>
      <div className="row d-flex justify-content-center">
        {products.map((ticket) => (
          <div key={ticket.id} className="col-md-4 mb-4 w-25">
            <ProductTicket {...ticket} setEditedItem={setEditedItem} setShow={setShow} />
          </div>
        ))}
        {show && (
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
                    <h5 className="modal-title">Edit Item</h5>
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
                      <div className="form-group mb-2">
                        <label className="fs-5">Speaker</label>
                        <input
                          type="text"
                          className="form-control"
                          name="speaker"
                          value={editedItem.speaker}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group mb-2">
                        <label className="fs-5">Speech Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="speechTitle"
                          value={editedItem.speechTitle}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group mb-2">
                        <label className="fs-5">Price</label>
                        <input
                          type="text"
                          className="form-control"
                          name="price"
                          value={editedItem.price}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group mb-2">
                        <label className="fs-5">Description</label>
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
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                      Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleSave}>
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`modal-backdrop show`}></div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
