import {configureStore} from '@reduxjs/toolkit';
import warehouseReducer from './WarehouseSlice';

const Store = configureStore({
    reducer: {
        warehouse: warehouseReducer,
    },
});

export default Store;

