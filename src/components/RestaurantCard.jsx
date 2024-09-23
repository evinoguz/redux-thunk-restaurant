import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = ({ data }) => {
  return (
    <Link
      to={`/restaurant/${data.id}`}
      className="shadow rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition"
    >
      <img src={data.photo} className="w-full object-contain" alt={data.photo} />
      <div className="p-3">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold">{data.name}</h3>
          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            {data.rating}
          </p>
        </div>
        <p className="flex gap-4 text-sm my-2 text-gray-500">
          <span>Minimum: {data.minPrice}</span>
          <span>Kategori: {data.name}</span>
        </p>
        <div className="flex gap-4 items-center">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <FaClock />
            <span>{data.estimatedDelivery}</span>
          </p>
          {data.isDeliveryFree && (
            <p className="flex gap-2 items-center text-red-500 font-bold">
              <MdDeliveryDining />
              Ücretsiz
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
