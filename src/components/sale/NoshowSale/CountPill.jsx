import { useEffect, useState } from "react";
import { ReactComponent as MinusIcon } from "../../../assets/icons/amount-minus-small.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/amount-plus-small.svg";

export default function CountPill({ point, onCountChange, value }) {
  const [count, setCount] = useState(value || 0);

  useEffect(() => {
    setCount(value || 0);
  }, [value]);

  const limit = 10000;

  const minus = () => {
    if (count > 0) {
      const newCount = count - point;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  const plus = () => {
    if (count < limit) {
      const newCount = Math.min(count + point, limit);
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div style={countPillStyle}>
      <MinusIcon onClick={minus} />
      <div className="font-count-pill" style={countPillTextStyle}>
        {count}
      </div>
      <PlusIcon onClick={plus} />
    </div>
  );
}

const countPillStyle = {
  display: "flex",
  width: "72px",
  height: "19px",
  padding: "3px 5px 2px 5px",
  justifyContent: "center",
  gap: "1px",
  borderRadius: "10px",
  border: "0.1px solid #000",
};

const countPillTextStyle = {
  width: "31px",
  height: "12px",
};
