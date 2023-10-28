import { createContext } from "react";

const EmailContext = createContext({
  email: "",
  setEmail: (email: any) => email,
});

export default EmailContext;
