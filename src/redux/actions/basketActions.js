import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getBasket = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CARD_SUCCESS,
  });
  api
    .get("/card")
    .then((res) =>
      dispatch({
        type: ActionTypes.CARD_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.CARD_ERROR,
        payload: err.message,
      });
    });
};

export const addToBasket = (product, rest) => (dispatch) => {
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };
  api
    .post(`/card`, newItem)
    .then(() =>
      dispatch({
        type: ActionTypes.ADD_TO_CARD,
        payload: newItem,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.CARD_ERROR,
        payload: err.message,
      });
    });
};

export const updateItem = (id, newAmount) => (dispatch) => {
  api.patch(`/card/${id}`, { amount: newAmount }).then((res) => {
    dispatch({
      type: ActionTypes.UPDATE_CARD,
      payload: res.data,
    });
  });
};
export const deleteItem = (id) => (dispatch) => {
  api.delete(`/card/${id}`).then(() =>
    dispatch({
      type: ActionTypes.DELETE_FROM_CARD,
      payload: id,
    })
  );
};
