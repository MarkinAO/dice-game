import style from "./dice.module.scss";

interface IDice {
  skin: string;
}

export default function Dice({ skin }: IDice) {
  return (
    <div className={style.container}>
      <img src={skin} alt="" className={style.image} />
    </div>
  );
}
