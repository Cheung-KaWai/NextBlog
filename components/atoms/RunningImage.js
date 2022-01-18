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
      d="M19.063 8.125a2.812 2.812 0 1 0 0-5.625 2.812 2.812 0 0 0 0 5.625ZM13.412 10.801c-.779.194-1.31.485-1.74.847-.644.542-1.164 1.325-1.866 2.555a1.25 1.25 0 1 1-2.171-1.241c.7-1.223 1.406-2.368 2.427-3.226 1.065-.898 2.369-1.405 4.127-1.601.735-.081 1.543-.065 2.302.273.795.356 1.377.993 1.773 1.844.534 1.146.93 1.827 1.248 2.222.153.19.26.278.32.318.049.031.07.034.077.035.055.006.231 0 .748-.23.226-.1.472-.22.774-.366l.072-.035c.368-.182.74-.357 1.114-.525a1.25 1.25 0 0 1 1.016 2.284 30.76 30.76 0 0 0-1.033.487l-.082.04c-.288.14-.578.282-.85.402-.562.25-1.281.52-2.06.425-.823-.1-1.457-.565-1.979-1.188l-1.708 3.296 2.363 3.074c.14.183.227.402.252.632l.52 4.998a1.25 1.25 0 1 1-2.487.258l-.483-4.645-1.435-1.868-.013.023-.052-.107-2.652-3.45a1.25 1.25 0 0 1-.176-1.209l1.655-4.322Z"
      fill="#46009F"
    />
    <path
      d="m11.52 18.13-.92 2.474-3.625-.287a1.25 1.25 0 1 0-.199 2.492l4.568.362a1.25 1.25 0 0 0 1.27-.81l.704-1.892-1.798-2.34Z"
      fill="#46009F"
    />
  </svg>
);

export default SvgComponent;