import { useState } from "react";
import style from "./style.module.scss";
import arrowDown from "./assets/arrowDown.svg";
import arrowUp from "./assets/arrowUp.svg";
import { useStore } from "@shared/model";

const BET_VALUES = ["1.00", "5.00", "10.00", "15.00", "20.00"];

export function Select() {
  const [arrow, setArrow] = useState(true);
  const { moneyBet, setMoneyBet } = useStore((state) => state);
  const onClick = (e: any) => {
    if (e.target) {
      setMoneyBet(Number(e.target.textContent));
    }
  };
  return (
    <div className={style.container}>
      <div
        className={`${style.select} ${!arrow && style.active}`}
        onClick={() => setArrow(!arrow)}
      >
        {`${moneyBet}.00`}
        <img src={arrow ? arrowDown : arrowUp} alt="" />
      </div>
      {!arrow && (
        <div className={style.options}>
          {BET_VALUES
            .filter((bet) => bet !== `${moneyBet}.00`)
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
