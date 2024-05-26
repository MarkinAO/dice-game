import { create } from "zustand";
import { devtools } from "zustand/middleware";

type StatePanel = {
  title: string
  text: string
}

interface IStore {
  popup: boolean;
  bet: number[];
  auth: boolean;
  score: number;
  error: boolean;
  statePanel: StatePanel;
  select: string;
  isPlay: boolean;
  moneyBet: number;
  winValue: number;
  togglePopup: Function;
  setBet: Function;
  setAuth: Function;
  setScore: Function;
  setError: Function;
  setStatePanel: Function;
  setSelect: Function;
  setIsPlay: Function;
  setWinValue: Function;
  setMoneyBet: Function;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    popup: false,
    bet: [0],
    auth: false,
    score: 100,
    error: false,
    statePanel: {
      title: "Войдите, чтобы продолжить",
      text: "",
    },
    select: "1",
    isPlay: false,
    winValue: 1,
    moneyBet: 1,
    togglePopup: () => set((state) => ({ popup: !state.popup })),
    setBet: (newBet: number[]) => set((state) => ({ bet: newBet })),
    setAuth: (newAuth: boolean) => set((state) => ({ auth: newAuth })),
    setScore: (value: number) =>
      set((state) => ({ score: state.score + value })),
    setError: (isErr: boolean) => set((state) => ({ error: isErr })),
    setStatePanel: ({title, text}: StatePanel) => set((state) => ({ statePanel: {title, text} })),
    setSelect: (text: string) => set((state) => ({ select: text })),
    setIsPlay: (value: boolean) => set((state) => ({ isPlay: value })),
    setWinValue: (value: number) => set((state) => ({ winValue: value })),
    setMoneyBet: (bet: number) => set((state) => ({ moneyBet: bet })),
  }))
);
