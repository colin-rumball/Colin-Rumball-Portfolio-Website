import * as React from "react";
const FlashIcon = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path
      d="M5 5v22h22V5H5zm2 2h18v18H7V7zm5 4v10h2v-4h2v-2h-2v-2h3v-2h-5zm6 0v10h2V11h-2z"
      fontFamily="Sans"
      overflow="visible"
      style={{
        textIndent: 0,
        textAlign: "start",
        lineHeight: "normal",
        textTransform: "none",
      }}
    />
  </svg>
);
export default FlashIcon;
