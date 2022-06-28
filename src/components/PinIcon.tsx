import React from "react";

// TODO: create IconBase component, extend HTMLSvgElement Props and make width and height customizable
const PinIcon = () => {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"
      ></path>
      <circle
        cx="12"
        cy="11"
        r="2.25"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      ></circle>
    </svg>
  );
};

export default PinIcon;