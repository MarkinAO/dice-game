import style from "./style.module.scss";
import { Button } from "@features/smartButton";
import { Select } from "@shared/ui/select";
import { useStore } from "@shared/model";
import { useState } from "react";
import { processingDiceResult } from "@features/processingDiceResult";

export function BetPanel() {
  const {
    setBet,
    bet,
    select,
    score,
    moneyBet,
    setIsPlay,
    setWinValue,
    setScore,
    setStatePanel,
  } = useStore((state) => state);
  const [hidden, setHidden] = useState(true);
  const onClick = () => {
    if (score > 0 && score >= moneyBet) {
      processingDiceResult({
        bet,
        setIsPlay,
        setWinValue,
        setScore,
        moneyBet,
        setStatePanel,
      });
    } else {
      setHidden(false);
      setTimeout(() => {
        setHidden(true);
      }, 2000);
    }
  };
  return (
    <div className={style.container}>
      <div className={`${style.row} ${style.text}`}>Размер ставки</div>
      <div className={style.row}>
        <Select />
      </div>
      <div className={`${style.row} ${style.block}`}>Варианты ставок</div>
      <div className={style.row}>
        <Button
          text={"Четное"}
          isActive={JSON.stringify(bet) === JSON.stringify([2, 4, 6])}
          handler={() => {
            setBet([2, 4, 6]);
          }}
        />
        <Button
          text={"Нечетное"}
          isActive={JSON.stringify(bet) === JSON.stringify([1, 3, 5])}
          handler={() => {
            setBet([1, 3, 5]);
          }}
        />
      </div>
      <div className={style.row}>
        <Button
          text={"От 1 до 3"}
          isActive={JSON.stringify(bet) === JSON.stringify([1, 2, 3])}
          handler={() => {
            setBet([1, 2, 3]);
          }}
        />
        <Button
          text={"От 4 до 6"}
          isActive={JSON.stringify(bet) === JSON.stringify([4, 5, 6])}
          handler={() => {
            setBet([4, 5, 6]);
          }}
        />
      </div>
      <div className={style.row}>
        <Button
          text={"Конкретное число"}
          isActive={bet.length === 1 && bet[0] !== 0}
          handler={() => {
            if (bet.length > 1) {
              setBet([Number(select)]);
            }
          }}
          isSelect={true}
        />
      </div>
      <div className={`${style.row} ${style.block}`}>
        <Button
          text={"Сделать ставку"}
          handler={() => {
            onClick();
          }}
          type="bet"
          disablet={bet[0] === 0 ? true : false}
        />
      </div>
      {!hidden && <div className={style.error}>Недостаточно средств</div>}
    </div>
  );
}
