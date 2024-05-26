import { useState } from "react";
import style from "./style.module.scss";
import arrowDown from "./assets/arrowDown.svg";
import arrowUp from "./assets/arrowUp.svg";
import { betValues } from "@shared/consts/consts";

export default function Select() {
  const [betValue, setBetValue] = useState("1.00");
  const [arrow, setArrow] = useState(true);
  const onClick = (e: any) => {
    if (e.target) {
      setBetValue(e.target.textContent);
    }
  };
  return (
    <div className={style.container}>
      <div
        className={`${style.select} ${!arrow && style.active}`}
        onClick={() => setArrow(!arrow)}
      >
        {betValue}
        <img src={arrow ? arrowDown : arrowUp} alt="" />
      </div>
      {!arrow && (
        <div className={style.options}>
          {betValues
            .filter((bet) => bet !== betValue)
            .map((bet: string) => (
              <div
                className={style.option}
                onClick={(e) => onClick(e)}
                key={bet}
              >
                {bet}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
