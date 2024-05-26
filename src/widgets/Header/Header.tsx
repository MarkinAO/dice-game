import style from "./style.module.scss";
import Button from "@shared/ui/button/Button";
import { useStore } from "@app/store";

export default function Header() {
  const { togglePopup, auth, score } = useStore((state) => state);
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <div>Test Game</div>
        {!auth ? (
          <div className={style.buttons}>
            <Button
              text="Вход"
              handler={() => {
                togglePopup();
              }}
              isActive={false}
            />
            <Button text="Регистрация" handler={() => {}} isActive={false} />
          </div>
        ) : (
          <div>{score} (TND)</div>
        )}
      </div>
    </div>
  );
}
