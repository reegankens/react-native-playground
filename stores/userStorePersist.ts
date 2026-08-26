
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  name: string;
  setName: (name: string) => void;
};

export const useUserStorePersist = create<UserState>()(
  persist(
    (set) => ({
      name: "Eduard",
      setName: (name) => set({name}),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(()=> {
        console.log('storage ',AsyncStorage)
        return AsyncStorage
      }),
    },
  ),
);