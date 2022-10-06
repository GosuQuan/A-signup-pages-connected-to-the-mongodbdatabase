import React, { useContext, useState } from "react";
const UserContext = React.createContext();
export function useInfo() {
  return useContext(UserContext);
}

function UserProvider({ children }) {
  const [account, setAccount] = useState(1);
  const [password, setPassword] = useState("");
  const userInfo = {
    account: account,
    password: password,
    setAccount: setAccount,
    setPassword: setPassword,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
