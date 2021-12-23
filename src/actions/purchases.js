import * as api from "../api/index";

export const addToBasket = (item) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  } catch (error) {
    console.log(error);
  }
};

export const checkout = (items) => async (dispatch) => {
  try {
    const status = await (await api.postPurchase(items)).status;
    if (status == 201 || 200) {
      await dispatch({ type: "CHECKOUT", payload: items });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const clearBasket = () => async (dispatch) => {
  await dispatch({ type: "CHECKOUT", payload: [] });
};

export const deleteOne = (itemIndex) => async (dispatch) => {
  try {
    dispatch({ type: "REMOVE_ONE", payload: itemIndex });
  } catch (error) {
    console.log(error.message);
  }
};
