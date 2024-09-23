import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import CardItem from "../components/CardItem";
import Error from "../components/Error";
import { FaFaceFrownOpen } from "react-icons/fa6";

const Card = () => {
  const card = useSelector((store) => store.card);
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>
      <div>
        {card.isLoading ? (
          <Loader />
        ) : card.error ? (
          <Error />
        ) : card.data.length === 0 ? (
          <p className="flex flex-col items-center gap-3">
            <FaFaceFrownOpen />
            Sepette ürün yok. Ürün eklemek için
            <Link to={"/"} className="border p-2 shadow rounded hover:bg-gray-100 font-bold">
              Anasayfa
            </Link>
          </p>
        ) : (
          card.data.map((item) => <CardItem key={item.id} item={item} />)
        )}
      </div>
    </Container>
  );
};

export default Card;
