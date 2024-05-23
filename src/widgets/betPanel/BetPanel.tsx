import style from "./betPanel.module.scss";
import Button from "../../shared/ui/button/Button";

export default function BetPanel() {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <Button text={"Четное"} handler={() => {}} />
        <Button text={"Нечетное"} handler={() => {}} />
      </div>
      <div className={style.row}>
        <Button text={"От 1 до 3"} handler={() => {}} />
        <Button text={"От 4 до 6"} handler={() => {}} />
      </div>
      <div className={style.row}>
        <Button text={"Конкретное число"} handler={() => {}} isSelect={true} />
      </div>
      <div className={style.row}>
        <Button text={"Сделать ставку"} handler={() => {}} type="bet" />
      </div>
    </div>
  );
}
