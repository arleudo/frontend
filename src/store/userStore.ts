import { create } from "zustand";
import { IUser, IUserStore } from "../models";

export const usersStore = create<IUserStore>()((set) => ({
    users: [],
    user: {} as IUser | null,
    loggedUser: {} as IUser | null,
    setUsers: (newUsers: IUser[]) => set(() => ({ users: newUsers })),
    setUser: (newUser: IUser | null) => set(() => ({ user: newUser })),
    setLoggedUser: (logged: IUser | null) => set(() => ({ user: logged })),
    removeUser: (id: string) => set((state) => ({ users: state.users.filter((u) => u.id !== id) })),
}))