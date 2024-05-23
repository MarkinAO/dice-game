import style from "./authorization.module.scss";
import Button from "../../shared/ui/button/Button";

export default function Authorization() {
  return (
    <div className={style.wrap}>
      <div className={style.container}>
        <div className={style.cross}></div>
        <div className={style.col}>
          <input className={style.input} type="text" placeholder="Login" />
          <input className={style.input} type="text" placeholder="Password" />
          <Button text="Войти" handler={() => {}} />
        </div>
      </div>
    </div>
  );
}
