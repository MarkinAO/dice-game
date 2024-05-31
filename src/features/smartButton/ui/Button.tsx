import { ChangeEvent } from "react";
import style from "./style.module.scss";
import { useStore } from "@shared/model";

interface IButton {
  text: string;
  handler?: Function;
  type?: "default" | "bet";
  isSelect?: boolean;
  disablet?: boolean;
  isActive?: boolean;
}

const DICE_VALUES = ["1", "2", "3", "4", "5", "6"];

export function Button({
  text,
  handler,
  type = "default",
  isSelect = false,
  disablet = false,
  isActive = false,
}: IButton) {
  const { setBet, select, setSelect } = useStore((state) => state);

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
          {DICE_VALUES.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      )}
    </button>
  );
}
