import React from "react";

import Flex from "../Flex";
import Avatar from "../Avatar";

export default function Card({ name, position }) {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Avatar width="50" description="User Image" />
      <div>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </Flex>
  );
}
