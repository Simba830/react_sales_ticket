import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssCustom/customStyles.css";

const Ticket = ({ speaker, speechTitle, date, price }) => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/500x200?text=Image"
        className="card-img-top"
        alt={"Ticket"}
      />
      <div className="card-body">
        <h4 className="card-subtitle mb-2 text-muted">{speaker}</h4>
        <p className="card-text">{speechTitle}</p>
        <p className="card-text">Date: {date}</p>
        <p className="card-text">Price: ${price}</p>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  speaker: PropTypes.string.isRequired,
  speechTitle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Ticket;
