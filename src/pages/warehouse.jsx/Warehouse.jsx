import React, { useState, useEffect } from 'react';
import styles from './Warehouse.module.css';
import WarehouseList from '../../components/warehouseList/WarehouseList';
import { useDispatch, useSelector } from 'react-redux';
import { addWarehouseDetails } from '../../redux/WarehouseSlice';
import WarehouseJson from "../../components/warehouse.json";
const Warehouse = () => {
  const warehouseData = useSelector((state) => state.warehouse.warehouseDetails);
  const [showData, setShowData] = useState([]);
  
  const dispatch = useDispatch();

 
  const handleFilterData = (e) => {
    const value = e.target.value;
    if (value === 'all') {
      setShowData(warehouseData);
      return;
    }
    const filterData = warehouseData.filter((data) => data.city === value);
    setShowData(filterData);
  };

  const handleSearchData = (e) => {
    const value = e.target.value.toLowerCase();
    const searchData = warehouseData.filter((data) =>
      data.name.toLowerCase().includes(value)
    );
    setShowData(searchData);
  };

  useEffect(() => {
    if (warehouseData.length === 0) {
      dispatch(addWarehouseDetails({ item: WarehouseJson }));
    } else {
      setShowData(warehouseData);
    }
  }, [dispatch, warehouseData]);
  return (
    <div> 
      <div className={styles.product_features}>
        <div className={styles.product_filter}>
          <select onChange={handleFilterData}>
            <option value="all">All City</option>
            {warehouseData.map((data) => (
              <option key={data.id} value={data.city}>
                {data.city}
              </option>
            ))}
          </select>
          <select onChange={handleFilterData}>
            <option value="all">Cluster</option>
            {warehouseData.map((data) => (
              <option key={data.id} value={data.cluster}>
                {data.cluster}
              </option>
            ))}
          </select>
          <select onChange={handleFilterData}>
            <option value="all">space_available</option>
            {warehouseData.map((data) => (
              <option key={data.id} value={data.space_available}>
                {data.space_available}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.product_search}>
          <input
            type="text"
            placeholder="search by name"
            onChange={handleSearchData}
          />
        </div>
      </div>
      <div className={styles.product_card}>
        <WarehouseList data={showData} />
      </div>
    </div>
  );
};

export default Warehouse;
