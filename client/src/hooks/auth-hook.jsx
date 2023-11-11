import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  // Initialize the username and partner state from sessionStorage to maintain session on page refresh
  const [username, setUsername] = useState(sessionStorage.getItem("username"));
  const [fname, setFname] = useState(sessionStorage.getItem("fname"));
  const [lname, setLname] = useState(sessionStorage.getItem("lname"));
  const [partner, setPartner] = useState(sessionStorage.getItem("partner"));

  const login = useCallback((b_username, b_fname, b_lname, b_partner) => {
    sessionStorage.setItem("username", b_username); // Store the username in sessionStorage
    sessionStorage.setItem("fname", b_fname); // Store the first name
    sessionStorage.setItem("lname", b_lname); // Store the last name
    sessionStorage.setItem("partner", b_partner); // Store the partner
    setUsername(b_username);
    setFname(b_fname);
    setLname(b_lname);
    setPartner(b_partner);
  }, []);

  const logout = useCallback(() => {
    // Remove the username and partner from sessionStorage
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("fname");
    sessionStorage.removeItem("lname");
    sessionStorage.removeItem("partner");
    setUsername(null);
    setFname(null);
    setLname(null);
    setPartner(null);
  }, []);

  const settingPartner = useCallback((b_partner) => {
    sessionStorage.setItem("partner", b_partner); // Update the partner in sessionStorage
    setPartner(b_partner);
  }, []);

  // Effect to synchronize state if sessionStorage changes (e.g., in a different tab)
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "username") {
        setUsername(sessionStorage.getItem("username"));
      }
      if (event.key === "fname") {
        setFname(sessionStorage.getItem("fname"));
      }
      if (event.key === "lname") {
        setLname(sessionStorage.getItem("lname"));
      }
      if (event.key === "partner") {
        setPartner(sessionStorage.getItem("partner"));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return { username, fname, lname, partner, login, logout, settingPartner };
};
