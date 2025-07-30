import React from "react";

export default function Todo({ text = "Default Todo" }) {
  return <li>{text}</li>;
}
