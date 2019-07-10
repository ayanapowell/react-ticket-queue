import React from "react";

function NewTicketForm() {
  return (
    <div>
      <form>
        <input type="text" id="names" placeholder="Pair Names" />
        <br />
        <input type="text" id="location" placeholder="Location" />
        <br />
        <textarea id="issue" placeholder="Describe your issue." />
        <br />
        <button type="submit">Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
