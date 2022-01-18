import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.25 10.417v29.166a4.167 4.167 0 0 0 4.167 4.167h29.166a4.179 4.179 0 0 0 4.167-4.167V10.417a4.179 4.179 0 0 0-4.167-4.167H10.417a4.167 4.167 0 0 0-4.167 4.167Zm25 8.333A6.242 6.242 0 0 1 25 25a6.242 6.242 0 0 1-6.25-6.25A6.242 6.242 0 0 1 25 12.5a6.242 6.242 0 0 1 6.25 6.25ZM12.5 35.417c0-4.167 8.333-6.459 12.5-6.459s12.5 2.292 12.5 6.459V37.5h-25v-2.083Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
