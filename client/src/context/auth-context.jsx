import { createContext } from "react";

export const AuthContext = createContext({
  firstname: null,
  lname: null,
  fname: null,
  login: () => {},
  logout: () => {}
});
