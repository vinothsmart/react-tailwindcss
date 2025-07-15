import { memo, useCallback } from "react";

const TabButton = ({ children }) => {
  const handleClick = useCallback(() => {
    console.log("Tab button clicked");
  }, []);

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};

export default memo(TabButton);
