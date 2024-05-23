import style from "./home.module.scss";
import BetPanel from "../../widgets/betPanel/BetPanel";
import RollDice from "../../features/rollDice/RollDice";
import Authorization from "../../widgets/authorization/Authorization";

export default function Home() {
  return (
    <>
      <Authorization />
      <div className={style.container}>
        <RollDice />
        <BetPanel />
      </div>
    </>    
  );
}
