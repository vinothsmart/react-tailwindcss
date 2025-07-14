import { memo, useCallback, useState } from "react";

const NYL = () => {
  const [horseValue, setHourValue] = useState(200);
  const [updateHorseValue, setUpdateHorseValue] = useState(200);
  const [message, setMessage] = useState("");

  // const handChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   useCallback(() => {
  //     setHourValue(e.target.value);
  //   }, [e.target.value]);

  const upDateHorseValue = useCallback((e: any) => {
    setHourValue(e.target.value);
  }, []);

  const handleButtonClick = useCallback(() => {
    setUpdateHorseValue(horseValue);
    if (horseValue !== updateHorseValue) {
      setMessage("Horse value updated");
    } else {
      setMessage("");
    }
  }, [horseValue, updateHorseValue]);

  return (
    <>
      <h1>Car Value : {updateHorseValue}</h1>
      {message.length > 0 && (
        <h1>
          {message} : {updateHorseValue}
        </h1>
      )}
      <input type="text" onChange={upDateHorseValue} value={horseValue} />
      <button onClick={handleButtonClick}>Click Me</button>
    </>
  );
};

export default memo(NYL);
