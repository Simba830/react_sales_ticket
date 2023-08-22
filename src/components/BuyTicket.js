import React, { useState } from "react";
import Ticket from "./Ticket";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cssCustom/customStyles.css";
import TicketModal from "./TicketModal";

const BuyTicket = () => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [acceptsTerms, setAcceptsTerms] = useState(false);

  const changeNumberOfTickets = (event) => {
    const { value } = event.target;
    const newValue = value >= 2 ? 2 : 1;
    setNumberOfTickets(newValue);
  };

  const openModal = () => {
    if (acceptsTerms) {
      setIsShow(true);
    } else {
      alert("Please agree to both conditions before buying.");
    }
  };

  return (
    <div className="ticket-wrapper container">
      <Ticket
        speaker="Speaker"
        speechTitle="Title about speech of the speaker"
        date="20.09.2023"
        price={150}
      />
      <div className="ticket-action">
        <div className="w-100">
          <div className="ticket-input">
            <input
              type="number"
              value={numberOfTickets}
              onChange={changeNumberOfTickets}
              max={2}
              min={1}
            />
            <p>*maximum 2 tickets</p>
          </div>
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                checked={acceptsTerms}
                onChange={() => setAcceptsTerms(!acceptsTerms)}
              />
              Accept terms and conditions
            </label>
          </div>
        </div>
        <button
          className="btn custom-button"
          disabled={!acceptsTerms}
          onClick={openModal}
        >
          Buy Ticket
        </button>
      </div>
      <TicketModal
        isShow={isShow}
        setIsShow={setIsShow}
        numberOfTickets={numberOfTickets}
      />
    </div>
  );
};

export default BuyTicket;
