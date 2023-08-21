import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductTicket = ({
  id,
  speaker,
  speechTitle,
  date,
  price,
  description,
  setEditedItem,
  setShow,
}) => {

  return (
    <div className="card w-100">
      <img
        src="https://via.placeholder.com/500x200?text=Image"
        className="card-img-top"
        alt={"Ticket"}
      />
      <div className="card-body">
        <h4 className="card-subtitle mb-2 text-muted">{speechTitle}</h4>
        <p className="card-text">Speaker: {speaker}</p>
        <p className="card-text">{date}</p>
        <p className="card-text">Description: {description}</p>
        <p className="card-text">Price: ${price}</p>
      </div>
      <div className="column">
        <button
          className="btn btn-primary mr-2 w-50"
          onClick={() => {
            setEditedItem({ id, speaker, speechTitle, date, price, description });
            setShow(true);
          }}
        >
          Edit
        </button>
        <button className="btn btn-danger mr-2 w-50" onClick={() => date}>
          Delete
        </button>
      </div>
    </div>
  );
};
