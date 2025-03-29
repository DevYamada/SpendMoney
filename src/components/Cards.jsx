import { useState, useEffect, useContext } from "react";
import _infos from "../../public/infos.json";
import { MoneyContext } from "./MoneyProvider";


function Cards({ card }) {
  const [quantity, setQuantity] = useState(card.quantity);
  const [minusmore, setMinusmore] = useState(2);
  const { money, updateMoney } = useContext(MoneyContext);
  const [valueT, setValue] = useState("");

  useEffect(() => {
    if (money == null) {
      updateMoney(350000000000);
    } else {
      const currentMoney = money;
      if (minusmore == 0) {
        updateMoney(currentMoney + card.price);
        setValue(Number(valueT) - 1);
        setMinusmore(2);
      } else if (minusmore == 1) {
        updateMoney(currentMoney - card.price);
        setValue(Number(valueT) + 1);
        setMinusmore(2);
      }
    }
  }, [quantity]);

  return (
    <>
      <div className="card col cardcard" style={{ maxWidth: "19rem" }}>
        <div className="d-flex justify-content-center align-items-center card-img-top-div">
          <img src={card.url} className="card-img-top" alt="..." />
        </div>
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
              onClick={() => {
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
              value={valueT}
              min="0"
              max="100"
              onChange={(e) => {
                if (
                  e.target.value < 0 ||
                  e.target.type != "number" ||
                  e.target.value > 100
                ) {
                  alert("Quantidade inválida!");
                } else {
                  if (e.target.value != valueT) {
                    if (e.target.value < valueT) {
                      updateMoney(money + card.price * Number(valueT));
                    } else if (e.target.value > valueT) {
                      updateMoney(
                        money +
                          card.price * Number(valueT) -
                          card.price * Number(e.target.value)
                      );
                    }
                    setValue(e.target.value);
                    setQuantity(Number(e.target.value));
                  }
                }
              }}
            />
            <input
              type="button"
              value="+"
              className="btn btn-success"
              onClick={() => {
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
    </>
  );
}

export default Cards;
