import React, { useState } from "react";

const ContactCard = (props) => {
  const [showAge, setShowAge] = useState(false);

  //! {showAge ? <p>Age: 25</p> : null}
  //? if {showAge = TRUE} display {Age: 25} if not, display NOTHING
  //* shorter form of this is
  //! {showAge && <p>Age: 25</p>}

  return (
    <div>
      <div className="contact-card">
        <img src={props.avatarUrl} alt="profile-img" />

        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>

          <button
            onClick={() => {
              setShowAge(!showAge);
            }}
          >
            Show Age
          </button>

          {showAge && <p>Age: {props.age}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
