import { create } from "zustand";
import { devtools } from "zustand/middleware";

type StatePanel = {
  title: string;
  text: string;
};

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
  togglePopup: () => void;
  setBet: (newBet: number[]) => void;
  setAuth: (newAuth: boolean) => void;
  setScore: (value: number) => void;
  setError: (isErr: boolean) => void;
  setStatePanel: ({ title, text }: StatePanel) => void;
  setSelect: (text: string) => void;
  setIsPlay: (value: boolean) => void;
  setWinValue: (value: number) => void;
  setMoneyBet: (bet: number) => void;
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
    setBet: (newBet: number[]) => set(() => ({ bet: newBet })),
    setAuth: (newAuth: boolean) => set(() => ({ auth: newAuth })),
    setScore: (value: number) =>
      set((state) => ({ score: state.score + value })),
    setError: (isErr: boolean) => set(() => ({ error: isErr })),
    setStatePanel: ({ title, text }: StatePanel) =>
      set(() => ({ statePanel: { title, text } })),
    setSelect: (text: string) => set(() => ({ select: text })),
    setIsPlay: (value: boolean) => set(() => ({ isPlay: value })),
    setWinValue: (value: number) => set(() => ({ winValue: value })),
    setMoneyBet: (bet: number) => set(() => ({ moneyBet: bet })),
  }))
);
