import React from "react";
import styles from "./Details.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const warehouseData = useSelector(
    (state) => state.warehouse.warehouseDetails
  );

  const item = warehouseData.find((data) => data.id === id);

  if (item) {
    return (
      <div className={styles.details}>
        <h1>Warehouse Details</h1>
        <div>
          <strong>Name:</strong> {item.name}
        </div>
        <div>
          <strong>City:</strong> {item.city}
        </div>
        <div>
          <strong>Type:</strong> {item.type}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.details}>
        <h1>Warehouse Not Found</h1>
      </div>
    );
  }
};

export default Details;
