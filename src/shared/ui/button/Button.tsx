import { ChangeEvent } from "react";
import style from "./style.module.scss";
import { diceValues } from "@shared/consts/consts";
import { useStore } from "@app/store";

interface IButton {
  text: string;
  handler?: Function;
  type?: "default" | "bet";
  isSelect?: boolean;
  disablet?: boolean;
  isActive?: boolean;
}

export default function Button({
  text,
  handler,
  type = "default",
  isSelect = false,
  disablet = false,
  isActive = false,
}: IButton) {
  const {setBet, select, setSelect} = useStore((state) => state);
  
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
    setBet([Number(e.target.value)]);
  };
  const onClick = () => {
    handler && handler();
  };
  return (
    <button
      className={`${style.button} ${!disablet ? style[type] : style.disablet} ${
        isSelect && style.isSelect
      } ${isActive && style.active}`}
      onClick={() => {
        onClick();
      }}
    >
      {text}
      {isSelect && (
        <select value={select} onChange={onChange} className={style.options}>
          {diceValues.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      )}
    </button>
  );
}
