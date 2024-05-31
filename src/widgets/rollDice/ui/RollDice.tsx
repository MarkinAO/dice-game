import { Dice } from "@shared/ui/dice";
import { DICE_IMAGES } from "@shared/consts";
import { useEffect, useState } from "react";
import style from "./style.module.scss";

export function RollDice() {
  const [skin, setSkin] = useState(DICE_IMAGES[0]);
  const roll = () => {
    const random = Math.round(Math.random() * 5);
    setSkin(DICE_IMAGES[random]);
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
  );
}
