
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  warehouseDetails: [],
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    addWarehouseDetails: (state, action) => {
      state.warehouseDetails = action.payload;
    },

    updateWarehouseDetails: (state, action) => {
      const { id, item } = action.payload;
      const warehouseIndex = state.warehouseDetails.findIndex((warehouse) => warehouse.id === id);
      if (warehouseIndex !== -1) {
        state.warehouseDetails[warehouseIndex] = { ...state.warehouseDetails[warehouseIndex], ...item };
      }
    },

    deleteWarehouseDetails: (state, action) => {
      const { id } = action.payload;
      state.warehouseDetails = state.warehouseDetails.filter((warehouse) => warehouse.id !== id);
    },
  },
});
export const { addWarehouseDetails, updateWarehouseDetails, deleteWarehouseDetails } = warehouseSlice.actions;
export default warehouseSlice.reducer;
