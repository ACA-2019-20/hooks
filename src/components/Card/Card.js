import React from "react";

import Flex from "../Flex";
import Avatar from "../Avatar";

export default function Card({ name, position, avatar }) {
  return (
    <Flex flexDirection="row" alignItems="center">
      <Avatar width="50" avatar={avatar} description="User Image" />
      <div>
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </Flex>
  );
}
