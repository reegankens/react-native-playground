
import { create } from "zustand";

type UserState = {
  name:string,
  setName:(name: string) => void;
}
export const useUserStore = create<UserState>((set)=>({
  name:"Eduard",
  setName: (newName) => set({name:newName}),
}));