import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 1.25a1.25 1.25 0 0 1 1.25 1.25v15a1.25 1.25 0 0 1-1.25 1.25h-15a1.25 1.25 0 0 1-1.25-1.25v-15A1.25 1.25 0 0 1 2.5 1.25h15ZM2.5 0A2.5 2.5 0 0 0 0 2.5v15A2.5 2.5 0 0 0 2.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 0h-15Z"
      fill="#fff"
    />
    <path
      d="M10 5a.625.625 0 0 1 .625.625v3.75h3.75a.625.625 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 10 5Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
