import { FaArrowDown, FaClock, FaStar } from "react-icons/fa";

const RestaurantDetail = ({ data }) => {
  return (
    <div className="flex gap-5">
      <img src={data.photo} alt={data.name} className="w-[150px] rounde-md" />
      <div className="flex flex-col justify-between">
        <p className="flex gap-5">
          <span className="flex items-center gap-2">
            <FaArrowDown className="text-red-500" /> min {data.minPrice} $
          </span>
          <span className="flex items-center gap-2">
            <FaClock />
            {data.estimatedDelivery} dak.
          </span>
        </p>
        <h1 className="text-3xl max-md:text-2xl font-semibold">{data.name}</h1>
        <p className="flex items-center gap-2">
          <FaStar />
          {data.rating}
          <a href="#" className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition">
            Yorumları Gör
          </a>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
