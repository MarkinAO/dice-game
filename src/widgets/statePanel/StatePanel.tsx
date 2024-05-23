import style from "./statePanel.module.scss";

export default function StatePanel() {
  return (
    <>
      <div className={style.block}></div>
      <div className={style.state}>Войдите, чтобы продолжить</div>
    </>
  );
}
