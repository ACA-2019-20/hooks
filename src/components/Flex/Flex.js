import React from "react";
import { string } from "prop-types";

export default function Flex({
  children,
  flexDirection,
  justifyContent,
  alignItems
}) {
  return (
    <div style={{ display: "flex", flexDirection, justifyContent, alignItems }}>
      {children}
    </div>
  );
}

Flex.propTypes = {
  flexDirection: string,
  justifyContent: string,
  alignItems: string
};

Flex.defaultProps = {
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start"
};
