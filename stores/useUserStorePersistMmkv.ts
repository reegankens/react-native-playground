
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { storage } from "./mmkv";

type UserState = {
  name: string;
  setName: (name: string) => void;
};

const mmkvStorage = {
  getItem: (name: string) => {
    return storage.getString(name) ?? null;
  },

  setItem: (name: string, value: string) => {
    storage.set(name, value);
  },

  removeItem: (name: string) => {
    storage.remove(name);
  },
};

export const useUserStorePersistMmkv = create<UserState>()(
  persist(
    (set) => ({
      name: "Eduard",
      setName: (name) => set({name}),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(()=> {
        return mmkvStorage
      }),
    },
  ),
);