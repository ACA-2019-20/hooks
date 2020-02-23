import React from "react";
import { string } from "prop-types";

import "./Avatar.css";

export default function Avatar({ width, avatar, description }) {
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
