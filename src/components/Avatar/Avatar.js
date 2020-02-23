import React from "react";
import { string } from "prop-types";

import { ItemContext } from "../Cards/Cards";

import "./Avatar.css";

export default function Avatar({ width, description }) {
  const { avatar } = React.useContext(ItemContext);

  return (
    <img
      className="avatar"
      width={width}
      height={width}
      src={avatar}
      alt={description}
    />
  );
}

Avatar.propTypes = {
  width: string.isRequired,
  avatar: string.isRequired,
  description: string.isRequired
};
