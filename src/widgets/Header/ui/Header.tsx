import style from "./style.module.scss";
import { Button } from "@features/smartButton";
import { useStore } from "@shared/model";

export function Header() {
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
            <Button text="Регистрация" isActive={false} />
          </div>
        ) : (
          <div className={style.text}>{score} (TND)</div>
        )}
      </div>
    </div>
  );
}
