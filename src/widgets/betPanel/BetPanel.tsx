import style from "./style.module.scss";
import Button from "@shared/ui/button/Button";
import Select from "@shared/ui/select/Select";
import { useStore } from "@app/store";
import { useState } from "react";

export default function BetPanel() {
  const {
    setBet,
    bet,
    select,
    setIsPlay,
    setWinValue,
    score,
    setScore,
    moneyBet,
    setStatePanel,
  } = useStore((state) => state);
  const [hidden, setHidden] = useState(true);
  const onClick = () => {
    if (score > 0 && score >= moneyBet) {
      setIsPlay(true);
      const random = Math.round(Math.random() * 5) + 1;
      setWinValue(random);
      setTimeout(() => {
        setIsPlay(false);
        if (bet.length === 1 && random === bet[0]) {
          setScore(moneyBet * 3);
          setStatePanel({
            title: `Результат броска кубика: ${random}`,
            text: `Вы выиграли ${moneyBet * 3} TND!`,
          });
        } else if (bet.length > 1 && bet.includes(random)) {
          setScore(moneyBet * 2);
          setStatePanel({
            title: `Результат броска кубика: ${random}`,
            text: `Вы выиграли ${moneyBet * 2} TND!`,
          });
        } else {
          setScore(-moneyBet);
          setStatePanel({
            title: `Результат броска кубика: ${random}`,
            text: `Повезет в следующий раз!`,
          });
        }
      }, 2000);
    } else {
      setHidden(false)
      setTimeout(() => {
        setHidden(true)
      }, 2000)
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
