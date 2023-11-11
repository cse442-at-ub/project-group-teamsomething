import { createContext } from "react";

export const AuthContext = createContext({
  username: null,
  lname: null,
  fname: null,
  partner: null,
  login: () => {},
  logout: () => {},
  settingPartner: () => {},
});
