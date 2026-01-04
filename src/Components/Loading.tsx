import React from "react";

const style: React.CSSProperties = {
  border: "var(--gap-1) solid var(--color-3)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap-1)",
  height: "var(--gap-1)",
  borderRadius: "50%",
  animation: 'spin 1s infinite linear'

};

const Loading = () => {
  return <div style={style} className="mb"></div>;
};

export default Loading;

