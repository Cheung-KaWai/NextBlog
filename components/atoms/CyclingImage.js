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
      d="M13.75 19.267V25h2.5v-5.733c0-.657-.268-1.302-.732-1.767l-2.5-2.5 3.232-3.232 2.5 2.5c.465.464 1.11.732 1.767.732H25v-2.5h-4.483l-4.633-4.634a1.248 1.248 0 0 0-1.768 0L10 11.983a2.483 2.483 0 0 0-.733 1.767c0 .668.26 1.295.733 1.768l3.75 3.75ZM20 8.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      fill="#46009F"
    />
    <path
      d="M22.5 17.5c-2.758 0-5 2.242-5 5s2.242 5 5 5 5-2.242 5-5-2.242-5-5-5Zm0 7.5a2.502 2.502 0 0 1-2.5-2.5c0-1.379 1.121-2.5 2.5-2.5s2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5Zm-15 2.5c2.758 0 5-2.242 5-5s-2.242-5-5-5-5 2.242-5 5 2.242 5 5 5Zm0-7.5c1.379 0 2.5 1.121 2.5 2.5S8.879 25 7.5 25A2.502 2.502 0 0 1 5 22.5C5 21.121 6.121 20 7.5 20Z"
      fill="#46009F"
    />
  </svg>
);

export default SvgComponent;