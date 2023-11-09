import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
  // Initialize the username state from sessionStorage to maintain session on page refresh
  const [username, setUsername] = useState(sessionStorage.getItem("username"));

  const login = useCallback((b_username) => {
    sessionStorage.setItem("username", b_username); // Store the username in sessionStorage
    setUsername(b_username);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem("username"); // Remove the username from sessionStorage
    setUsername(null);
  }, []);

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

  return { username, login, logout };
};
