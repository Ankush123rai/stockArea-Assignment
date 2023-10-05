import React, { useState, useEffect } from 'react';
import styles from './Warehouse.module.css';
import WarehouseJson from '../../components/warehouse.json';
import WarehouseList from '../../components/warehouseList/WarehouseList';
import { useDispatch, useSelector } from 'react-redux';
import { addWarehouseDetails } from '../../redux/warehouseSlice'; // Correct the import path

const Warehouse = () => {
  const dataFromRedux = useSelector((state) => state.warehouse.warehouseDetails);
  const [warehouseData, setWarehouseData] = useState(dataFromRedux);

  const dispatch = useDispatch();

  const handleFilterData = (e) => {
    const value = e.target.value;
    let filteredData = dataFromRedux;

    if (value === 'city') {
      filteredData = filteredData.filter((data) =>
        data.city.toLowerCase().includes(value.toLowerCase())
      );
    } else if (value === 'cluster') {
      filteredData = filteredData.filter((data) =>
        data.cluster.toLowerCase().includes(value.toLowerCase())
      );
    }

    setWarehouseData(filteredData);
  };

  const handleSearchData = (e) => {
    const value = e.target.value.toLowerCase();
    const searchData = WarehouseJson.filter((data) =>
      data.name.toLowerCase().includes(value)
    );
    setWarehouseData(searchData);
  };

  useEffect(() => {
    dispatch(addWarehouseDetails({ item: WarehouseJson }));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.product_features}>
        <div className={styles.product_filter}>
          <select onChange={handleFilterData}>
            <option value="all">Filtered</option>
            <option value="city">City</option>
            <option value="cluster">Cluster</option>
          </select>
        </div>
        <div className={styles.product_search}>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearchData}
          />
        </div>
      </div>
      <div className={styles.product_card}>
        <WarehouseList data={warehouseData} />
      </div>
    </div>
  );
};

export default Warehouse;
