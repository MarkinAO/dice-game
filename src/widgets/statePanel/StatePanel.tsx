import style from "./style.module.scss";
import { useStore } from "@app/store";

export default function StatePanel() {
  const { auth, statePanel } = useStore((state) => state);
  return (
    <>
      {!auth && <div className={style.block}></div>}
      <div className={style.container}>
        <div className={style.title}>{statePanel.title}</div>
        {<div className={style.text}>{statePanel.text}</div>}
      </div>
    </>
  );
}
