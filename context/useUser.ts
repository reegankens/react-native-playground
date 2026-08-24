import { useContext } from "react";
import { UserContext } from "./userProvider";

export function useUser(){
  const context = useContext(UserContext);
  if(!context){
    throw new Error("useUser harus digunakan di dalam UserProvider");
  }

  return context;
}