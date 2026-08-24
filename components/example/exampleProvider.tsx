import { UserProvider } from "@/context/userProvider";
import { ExampleInject } from "./exampleInject";

export function ExampleProvider(){
  return (
    <UserProvider>
      <ExampleInject/>
    </UserProvider>
  )
}