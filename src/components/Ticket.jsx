import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <div>
      <style jsx>
        {`
          div {
            background: #ccc;
            margin: 20px 0;
            padding: 30px;
          }
        `}
      </style>
      <h3>
        {props.location} - {props.names}
      </h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr />
    </div>
  );
}

Ticket.propTypes = {
  location: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  issue: PropTypes.string
};
export default Ticket;
