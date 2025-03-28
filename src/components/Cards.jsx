import { useState, useEffect, useContext } from "react";
import infos from "../../public/infos.json";
import { MoneyContext } from "./MoneyProvider";

function moneyDisp(money){
    localStorage.setItem("money", money)
}

function Cards({ card }) {
  const [quantity, setQuantity] = useState(card.quantity);
  const [minusmore, setMinusmore] = useState(2);
  const { money, updateMoney } = useContext(MoneyContext);

  useEffect(() => {
    if (localStorage.getItem("money") == null) {
      updateMoney(300000000000)
    } else {
        const currentMoney = Number(localStorage.getItem("money"));
      if (minusmore == 0) {
        updateMoney(currentMoney + card.price);
        setMinusmore(2)
        console.log(localStorage.getItem("money"))
      } else if (minusmore == 1) {
        updateMoney(currentMoney - card.price);
          infos[0] = ''
        setMinusmore(2)
      }
    }
  }, [quantity]);

  return (
    <>
      <div
        className="card border-success mb-3 col"
        style={{ maxWidth: "19rem" }}
      >
        <img src={card.url} className="card-img-top" alt="..." />
        <div className="card-body col">
          <h5 className="card-title">{card.product}</h5>
          <p className="card-text">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(card.price)}
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="button"
              value="-"
              className="btn btn-danger"
              onClick={(e) => {
                if (quantity <= 0) {
                  alert("Quantidade não pode ser menor que 0");
                } else {
                  setMinusmore(0);
                  setQuantity(quantity - 1);
                }
              }}
            />
            <input
              className="form form-control input-number quantity"
              type="number"
              name=""
              id=""
              placeholder={quantity}
              value={quantity}
              min="0"
              max="100"
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
            />
            <input
              type="button"
              value="+"
              className="btn btn-success"
              onClick={(e) => {
                setMinusmore(1);
                setQuantity(quantity + 1);
              }}
            />
          </div>
          <small id="passwordHelpBlock" className="form-text text-muted">
            Quantidade
          </small>
        </div>
      </div>
      {console.log(card.product)}
    </>
  );
}

export default Cards;
