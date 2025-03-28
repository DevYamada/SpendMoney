import React, { useState, useEffect, useContext } from "react";
import infos from "../../public/infos.json";
import { MoneyContext } from "./MoneyProvider";

function Money() {
    const { money } = useContext(MoneyContext);

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
