import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  // Initialize the username state from sessionStorage to maintain session on page refresh
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const [fname, setFname] = useState(null);
  const [lname, setLname] = useState(null);
  const [partner, setPartner] = useState(null);

  const login = useCallback((b_username, fname, lname, partner) => {
    sessionStorage.setItem("username", b_username); // Store the username in sessionStorage
    setUsername(b_username);
    setFname(fname);
    setLname(lname);
    setPartner(partner);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem("username"); // Remove the username from sessionStorage
    setUsername(null);
    setFname(null);
    setLname(null);
    setPartner(null);
  }, []);

  const settingPartner = useCallback((b_partner) => {
    setPartner(b_partner);
  });

  // Effect to synchronize state if sessionStorage changes (e.g., in a different tab)
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "username") {
        setUsername(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return { username, fname, lname, partner, login, logout, settingPartner };
};
