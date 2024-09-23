import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateItem, deleteItem } from "../redux/actions/basketActions";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };
  const handleDecrease = () => {
    item.amount > 1 ? dispatch(updateItem(item.id, item.amount - 1)) : dispatch(deleteItem(item.id));
  };
  return (
    <div className="flex gap-4 border mb-10 rounded-lg p-4">
      <img src={item.photo} className="w-[115px] rounded-lg" alt={item.title} />
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-red-500">{item.title}</h3>
        <p className="text-gray-500">{item.restaurantName}</p>
        <p className="py-3">{item.price}$</p>
        <div className="border text-xl rounded-lg w-[160px] flex justify-center">
          <button onClick={handleDecrease} className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg">
            {item.amount > 1 ? <FaMinus /> : <FaTrash />}
          </button>
          <span className="p-3">{item.amount}</span>
          <button className="p-3 text-red-500 hover:bg-red-100 transition rounded-lg">
            <FaPlus onClick={handleIncrease} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
