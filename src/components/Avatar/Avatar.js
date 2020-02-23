import React from "react";
import { string } from "prop-types";

import { ItemContext } from "../Cards/Cards";

import "./Avatar.css";

export default function Avatar({ width, description }) {
  return (
    <ItemContext.Consumer>
      {({ avatar }) => (
        <img
          className="avatar"
          width={width}
          height={width}
          src={avatar}
          alt={description}
        />
      )}
    </ItemContext.Consumer>
  );
}

Avatar.propTypes = {
  width: string.isRequired,
  avatar: string.isRequired,
  description: string.isRequired
};
