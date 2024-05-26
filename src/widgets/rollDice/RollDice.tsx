import Dice from "@widgets/dice/Dice";
import { diceImages } from "@shared/consts/consts";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

export default function RollDice() {
  const [skin, setSkin] = useState(diceImages[0]);
  const roll = () => {
    const random = Math.round(Math.random() * 5);
    setSkin(diceImages[random]);
    setTimeout(() => {
      roll();
    }, 300);
  };

  useEffect(() => {
    roll();
  }, []);
  return (
    <div className={style.container}>
      <Dice skin={skin} />
    </div>
  )
}
