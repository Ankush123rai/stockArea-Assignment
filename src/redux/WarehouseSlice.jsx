import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  warehouseDetails: [],
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    addWarehouseDetails: (state, action) => {
      const { item } = action.payload;
      state.warehouseDetails = item;
    },
    addItem: (state, action) => {
      const { newItem } = action.payload;
      if (newItem) {
        state.warehouseDetails = [...state.warehouseDetails, newItem];
      }
    },
    updateWarehouseDetails: (state, action) => {
      const { id, updatedItem } = action.payload;
      state.warehouseDetails = state.warehouseDetails.map((item) =>
        item.id === id ? updatedItem : item
      );
    },
    deleteWarehouseDetails: (state, action) => {
      const { id } = action.payload;
      state.warehouseDetails = state.warehouseDetails.filter(
        (warehouse) => warehouse.id !== id
      );
    },
  },
});

export const {
  addWarehouseDetails,
  updateWarehouseDetails,
  deleteWarehouseDetails,
  addItem,
} = warehouseSlice.actions;
export default warehouseSlice.reducer;
