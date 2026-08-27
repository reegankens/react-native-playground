import { userRepository } from "@/database/repositories/user.repositories";
import { UserModel } from "@/models/user.model";
import { create } from "zustand";

interface UserState{
  users:UserModel[];
  loading: boolean,

  fetchUsers: () => Promise<void>;
  addUser: (name:string, age:number) => Promise<void>;

}

export const useUserStoreSqlite = create<UserState>((set) => ({
  users: [],
  loading: false,

  fetchUsers: async() => {
    set({loading:true});

    try {
      const users = await userRepository.findAll();
      
      console.log('useUserStoreSqlite ',users)

      set({
        users,
        loading:false,
      });
      
    }
    catch(error){
      console.error(error);

      set({loading: false});
    }
  },

  addUser: async (name, age) => {
    set({loading:true});
    try{
      await userRepository.create(name, age);

      //refresh state setelah insert
      const users = await userRepository.findAll();

      set({ users, loading:false });
    }
    catch(e){
      console.error(e)
      set({loading:false})
      
    }
  }

}));