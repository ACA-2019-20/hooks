import React from "react";

import Card from "../Card";

export const ItemContext = React.createContext(null);

export default function Cards({ items }) {
  return items.map(({ avatar, name, position, id }) => (
    <ItemContext.Provider value={{ avatar }}>
      <Card key={id} name={name} position={position} />
    </ItemContext.Provider>
  ));
}
