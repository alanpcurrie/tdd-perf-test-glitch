import React, { useState } from "react";
import { SubmitButton } from "./styles";

type ConditionSetterProps = {
  onSubmit?: (value: number) => void;
};

export const ConditionSetter = ({ onSubmit }: ConditionSetterProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [, setCondition] = useState<number | null>(1000);

  const handleSubmit = () => {
    const numericValue = parseFloat(inputValue);
    if (isNaN(numericValue)) throw new Error("Invalid number entered");
    setInputValue("");
    setCondition(numericValue);
    if (onSubmit) onSubmit(numericValue);
  };

  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter condition"
      />
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </>
  );
};
