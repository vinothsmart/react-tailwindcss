import { memo } from "react";

const TabButton = ({ children }) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

export default memo(TabButton);
