import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: false,
  data: [],
};
const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CARD_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CARD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload,
      };
    case ActionTypes.ADD_TO_CARD:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: state.data.concat(action.payload),
      };
    case ActionTypes.UPDATE_CARD:
      const updateArray = state.data.map((i) => (i.id === action.payload.id ? action.payload : i));

      return {
        ...state,
        isLoading: false,
        error: false,
        data: updateArray,
      };

    case ActionTypes.DELETE_FROM_CARD:
      const filtred = state.data.filter((i) => i.id !== action.payload);
      return {
        ...state,
        isLoading: false,
        error: false,
        data: filtred,
      };
  }
  return state;
};
export default basketReducer;
