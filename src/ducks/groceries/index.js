import update from "immutability-helper";

const duckRoot = "app/groceries/";

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: "Bananas",
      category: "Fruit",
      deliveryMethod: "Air",
    },
    {
      id: 16,
      name: "Whole Grain Bread",
      category: "Grains",
      deliveryMethod: "Air",
    },
    {
      id: 100,
      name: "Lettuce",
      category: "Vegitable",
      deliveryMethod: "Ground",
    },
    {
      id: 10,
      name: "Roasted Turkey",
      category: "Deli",
      deliveryMethod: "Ground",
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: "",
    category: "",
    deliveryMethod: "",
  },
};

// Reducers
export default (state = initialState, action) => {
  const { type, payload } = action;
  const { list, selectedItem } = state;

  switch (type) {
    case ADD_ITEM:
      return update(state, {
        list: { $push: [payload] },
      });

    case REMOVE_ITEM:
      // Write a custom reducer that will remove an item from the list array
      const itemsArray = list.filter((item) => {
        return item.id !== payload;
      });

      return { ...state, list: itemsArray };

    case SELECT_ITEM:
      // Write a custom reducer that will select an item
      const itemSelected = list.find((item) => item.id === payload);

      return { ...state, selectedItem: itemSelected };

    case DESELECT_ITEM:
      // Write a customer reducer that will deselect an item

      if (selectedItem.id === payload) {
        return { ...state, selectedItem: {} };
      }

      return state;

    default:
      return state;
  }
};

// Action Creators
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const selectItem = (id) => {
  return {
    type: SELECT_ITEM,
    payload: id,
  };
};

export const deselectItem = (id) => {
  return {
    type: DESELECT_ITEM,
    payload: id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};
