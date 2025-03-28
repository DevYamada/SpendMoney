import { useState, useEffect } from "react";

function Cards({ card }) {

  const [quantity, setQuantity] = useState(card.quantity);



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
                setQuantity(quantity - 1);
              }}
            />
            <input
              className="form form-control input-number quantity"
              type="number"
              name=""
              id=""
              placeholder={quantity}
              value={quantity}
              min=""
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
