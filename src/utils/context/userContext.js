import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Ankush puri",
    email: "ankush@gmail.com",
  },
});

export default userContext;
