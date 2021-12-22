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
      d="M15.833 9.167H5.95l3.025-3.634a.834.834 0 1 0-1.283-1.066l-4.167 5a.992.992 0 0 0-.075.125c0 .041 0 .066-.058.108a.833.833 0 0 0-.059.3c.001.103.02.204.059.3 0 .042 0 .067.058.108a.984.984 0 0 0 .075.125l4.167 5a.834.834 0 0 0 1.283-1.066L5.95 10.833h9.883a.834.834 0 1 0 0-1.666Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
