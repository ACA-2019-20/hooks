import React from "react";

import Card from "../Card";

export default function Cards({ items }) {
  return items.map(({ avatar, name, position, id }) => (
    <Card avatar={avatar} key={id} name={name} position={position} />
  ));
}
