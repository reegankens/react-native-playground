import { createContext, useState } from "react";

type UserContextType = {
  name:string;
  setName: (name:string) => void
}
export const UserContext = createContext<UserContextType | undefined>(undefined);
export function UserProvider({children}:{children:React.ReactNode}){
  const [name,setName] = useState("Eduard");

  return (
    <UserContext.Provider value={{name, setName}}>
      {children}
    </UserContext.Provider>
  )
}

