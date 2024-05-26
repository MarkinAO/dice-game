import style from "./style.module.scss";
import BetPanel from "@widgets/betPanel/BetPanel";
import RollDice from "@widgets/rollDice/RollDice";
import Authorization from "@widgets/authorization/Authorization";
import Header from "../../widgets/header/Header";
import StatePanel from "@widgets/statePanel/StatePanel";
import Dice from "@widgets/dice/Dice";
import { useStore } from "@app/store";
import { diceImages } from "@shared/consts/consts";

export default function Field() {
  const isPlay = useStore((store) => store.isPlay);
  const winValue = useStore((store) => store.winValue);
  return (
    <>
      <Authorization />
      <div className={style.container}>
        <Header />
        <StatePanel />
        {isPlay ? <RollDice /> : <Dice skin={diceImages[winValue - 1]} />}
        <BetPanel />
      </div>
    </>
  );
}
