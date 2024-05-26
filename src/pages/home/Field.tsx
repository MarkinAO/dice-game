import style from "./field.module.scss";
import BetPanel from "@widgets/betPanel/BetPanel";
import RollDice from "@features/rollDice/RollDice";
import Authorization from "@widgets/authorization/Authorization";
import TopPanel from "@widgets/Header/Header";
import StatePanel from "@widgets/statePanel/StatePanel";

export default function Field() {
  return (
    <>
      <Authorization />
      <div className={style.container}>
        <TopPanel />
        <StatePanel />
        <RollDice />
        <BetPanel />
      </div>
    </>
  );
}
