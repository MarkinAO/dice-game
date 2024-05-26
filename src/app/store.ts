import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IStore {
  popup: boolean;
  bet: number[];
  auth: boolean;
  score: number;
  error: boolean;
  statePanel: string;
  togglePopup: () => void;  
  setBet: (newBet: number[]) => void;  
  setAuth: (newAuth: boolean) => void;  
  setError: (isErr: boolean) => void;
  setStatePanel: (text: string) => void;
}

export const useStore = create<IStore>()(
  devtools((set) => ({
    popup: false,
    bet: [1],
    auth: false,
    score: 100,
    error: false,
    statePanel: "Войдите, чтобы продолжить",
    togglePopup: () => set((state) => ({ popup: !state.popup })),
    setBet: (newBet: number[]) => set((state) => ({ bet: newBet })),
    setAuth: (newAuth: boolean) => set((state) => ({ auth: newAuth })),
    setError: (isErr: boolean) => set((state) => ({ error: isErr })),
    setStatePanel: (text: string) => set((state) => ({ statePanel: text })),
  }))
);
