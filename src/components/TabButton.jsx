import { memo, useCallback } from "react";

const TabButton = ({ children, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default memo(TabButton);
