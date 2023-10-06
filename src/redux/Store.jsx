import {configureStore} from '@reduxjs/toolkit';
import warehouseReducer from './warehouseSlice';

const Store = configureStore({
    reducer: {
        warehouse: warehouseReducer,
    },
});

export default Store;

