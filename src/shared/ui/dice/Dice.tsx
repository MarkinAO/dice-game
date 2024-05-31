import style from "./style.module.scss";

interface IDice {
  skin: string;
}

export function Dice({ skin }: IDice) {
  return (
    <div className={style.container}>
      <img src={skin} alt="" className={style.image} />
    </div>
  );
}
