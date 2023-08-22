import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssCustom/customStyles.css";
import { getOrderedTickets, getRemainTickets } from "../api/products";

const Ticket = ({ speaker, speechTitle, date, price }) => {
  const [numbersOfTickets, setNumbersOfTickets] = useState({
    ordered: 0,
    remain: 0,
  });

  useEffect(() => {
    const getTicketsByState = async () => {
      try {
        const { data: orderedTickets } = await getOrderedTickets();
        const { data: remainTickets } = await getRemainTickets();
        setNumbersOfTickets({
          ordered: orderedTickets.length,
          remain: remainTickets.length,
        });
      } catch (error) {
        throw new Error(error?.response?.data?.error || "Error get products");
      }
    };

    getTicketsByState();
  }, []);

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
        <div className="numbers-of-tickets">
          <p>Ordered: {numbersOfTickets.ordered}</p>
          <p>Remain: {numbersOfTickets.remain}</p>
        </div>
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
