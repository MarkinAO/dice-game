import { ChangeEvent, useState } from "react";
import style from "./button.module.scss";
import { diceValues } from "../../consts/consts";
import { useStore } from "../../../app/store";

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
  isActive = true,
}: IButton) {
  const [diceValue, setDiceValue] = useState("1");
  const setBet = useStore((state) => state.setBet);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDiceValue(e.target.value);
    setBet([Number(e.target.value)]);
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.target as HTMLButtonElement;
    if (isActive && !disablet && type === "default") {
      button.classList.toggle(style.active);
    }
    handler && handler();
  };
  return (
    <button
      className={`${style.button} ${!disablet ? style[type] : style.disablet} ${
        isSelect && style.isSelect
      }`}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {text}
      {isSelect && (
        <select value={diceValue} onChange={onChange} className={style.options}>
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
