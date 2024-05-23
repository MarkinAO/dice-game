import style from "./topPanel.module.scss";
import Button from "../../shared/ui/button/Button";

export default function StartScreen() {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <div>Test Game</div>
        <div className={style.buttons}>
          <Button text="Вход" handler={() => {}} />
          <Button text="Регистрация" handler={() => {}} />
        </div>
      </div>
    </div>
  );
}
