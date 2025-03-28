import React, { createContext, useState } from "react";

export const MoneyContext = createContext();

export function MoneyProvider({ children }) {
  const [money, setMoney] = useState(
    Number(localStorage.getItem("money")) || 300000000000
  );

  const updateMoney = (newMoney) => {
    setMoney(newMoney);
    localStorage.setItem("money", newMoney);
  };

  return (
    <MoneyContext.Provider value={{ money, updateMoney }}>
      {children}
    </MoneyContext.Provider>
  );
}