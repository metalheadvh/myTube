import { createContext, useEffect, useState } from "react";

export const UserProfileContext = createContext(null);

export default function UserProfileContextProvider(props) {
  const [user, setUser] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    localStorage.setItem("username", user);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUser(storedUsername);
    }
  }, []);

  return (
    <UserProfileContext.Provider value={{ user, setUser, password, setPassword, email, setEmail, handleLogin }}>
      {props.children}
    </UserProfileContext.Provider>
  );
}
