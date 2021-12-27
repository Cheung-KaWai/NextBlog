import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 23.75c4.714 0 7.071 0 8.535-1.465C27.5 20.821 27.5 18.464 27.5 13.75s0-7.071-1.465-8.535C24.571 3.75 22.214 3.75 17.5 3.75h-5c-4.714 0-7.071 0-8.535 1.465C2.5 6.679 2.5 9.036 2.5 13.75s0 7.071 1.465 8.535c.816.817 1.91 1.179 3.535 1.337"
      stroke="#46009F"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 23.75c-1.545 0-3.248.625-4.801 1.431-2.498 1.296-3.746 1.945-4.361 1.531-.615-.412-.5-1.693-.265-4.255l.052-.582"
      stroke="#46009F"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgComponent;
