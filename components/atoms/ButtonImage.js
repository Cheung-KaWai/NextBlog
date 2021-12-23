import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m25.152 7.656-12.744 10.92a1.875 1.875 0 0 0 0 2.847l12.744 10.92c1.216 1.043 3.095.179 3.095-1.423V9.077c0-1.602-1.879-2.466-3.095-1.42Z"
      fill="#46009F"
    />
  </svg>
);

export default SvgComponent;
