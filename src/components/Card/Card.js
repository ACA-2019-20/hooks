import React from "react";

export default function Card({ id, name, position, avatar }) {
  return (
    <div className="card">
      <img width="200" src={avatar} alt="User Image" />
      <div>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
}
