import React, { createContext, useState } from "react";

export const MoneyContext = createContext();

export function MoneyProvider({ children }) {
  const [money, setMoney] = useState(350000000000);

  const updateMoney = (newMoney) => {
    setMoney(newMoney);
  };

  return (
    <MoneyContext.Provider value={{ money, updateMoney }}>
      {children}
    </MoneyContext.Provider>
  );
}
