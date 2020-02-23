import React from "react";

export default function Card({ id, name, position, avatar }) {
  return (
    <div>
      <img width="200" src={avatar} alt="User Image" />
      <h3>{name}</h3>
      <p>{position}</p>
      <hr />
    </div>
  );
}
