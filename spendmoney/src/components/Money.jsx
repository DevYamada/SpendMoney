function Money(){
    return (
        <>
            <h1>            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(300000000000)}</h1>
        </>
    )
}

export default Money;