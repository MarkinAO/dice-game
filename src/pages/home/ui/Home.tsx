import style from "./style.module.scss";
import { BetPanel } from "@widgets/betPanel";
import { RollDice } from "@widgets/rollDice";
import { Authorization } from "@features/authorization";
import { Header } from "@widgets/Header";
import { StatePanel } from "@widgets/statePanel";
import { Dice } from "@shared/ui/dice";
import { useStore } from "@shared/model";
import { DICE_IMAGES } from "@shared/consts/consts";

export function Home() {
  const isPlay = useStore((store) => store.isPlay);
  const winValue = useStore((store) => store.winValue);
  return (
    <>
      <Authorization />
      <div className={style.container}>
        <Header />
        <StatePanel />
        {isPlay ? <RollDice /> : <Dice skin={DICE_IMAGES[winValue - 1]} />}
        <BetPanel />
      </div>
    </>
  );
}
