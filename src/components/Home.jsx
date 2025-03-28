import Cards from "./Cards";
import Money from "./Money";
import infos from "../../public/infos.json";
import { useState, useEffect } from "react";

function Home() {
  const [infosC, setInfos] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setInfos(infos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [infos]);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <Money />
        <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
          {infosC.map((cards) => (
            <Cards card={cards} key={cards.id} />
          ))}
        </div>
      </>
    );
  }
}

export default Home;
