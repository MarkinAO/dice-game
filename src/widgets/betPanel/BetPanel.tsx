import style from "./betPanel.module.scss";
import Button from "@shared/ui/button/Button";
import { useStore } from "@app/store";

export default function BetPanel() {
  const { setBet } = useStore((state) => state);
  return (
    <div className={style.container}>
      <div className={style.row}>
        <Button
          text={"Четное"}
          handler={() => {
            setBet([2, 4, 6]);
          }}
        />
        <Button
          text={"Нечетное"}
          handler={() => {
            setBet([1, 3, 5]);
          }}
        />
      </div>
      <div className={style.row}>
        <Button
          text={"От 1 до 3"}
          handler={() => {
            setBet([1, 2, 3]);
          }}
        />
        <Button
          text={"От 4 до 6"}
          handler={() => {
            setBet([4, 5, 6]);
          }}
        />
      </div>
      <div className={style.row}>
        <Button
          text={"Конкретное число"}
          handler={(newBet: number[]) => {
            setBet(newBet);
          }}
          isSelect={true}
        />
      </div>
      <div className={style.row}>
        <Button text={"Сделать ставку"} handler={() => {}} type="bet" />
      </div>
    </div>
  );
}
