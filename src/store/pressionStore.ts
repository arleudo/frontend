import { create } from "zustand";
import { IPression, IPressionsStore } from "../models";

export const pressionStore = create<IPressionsStore>()((set) => ({
    pressions: [],
    pression: {} as IPression,
    setPressions: (newPressions: IPression[]) => set(() => ({ pressions: newPressions })),
    setPression: (newPression: IPression) => set(() => ({ pression: newPression })),
    removePression: (id: string) => set((state) => ({ pressions: state.pressions.filter((u) => u.id !== id) })),
}))