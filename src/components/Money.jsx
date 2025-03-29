import React, { useState, useEffect, useContext } from "react";
import infos from "../../public/infos.json";
import { MoneyContext } from "./MoneyProvider";

function Money() {
  const { money } = useContext(MoneyContext);

  return (
    <>
      <div className="card align-items-center moneySD moneyProfile">
        <img
          className="img-profile"
          src="https://i.ibb.co/35q8y5Y4/eu3131.jpg"
          alt=""
        />
        <h2 style={{wordWrap: "break-word"}}>Gaste o Dinheiro do Futuro Yamada</h2>
      </div>
      <div className="sticky-top moneySD">
        <h1 className="moneyH">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(money)}
        </h1>
      </div>
    </>
  );
}

export default Money;
