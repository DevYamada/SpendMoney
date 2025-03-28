import React, { useState, useEffect } from "react";

function Money() {
  const [money, setMoney] = useState(
    localStorage.getItem("money") || "300000000000"
  );

  useEffect(() => {
    setMoney(localStorage.getItem("money", money) || "300000000000");
    console.log(1);
  }, [localStorage.getItem("money")]);

  return (
    <>
      <h1>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(money)}
      </h1>
    </>
  );
}

export default Money;
