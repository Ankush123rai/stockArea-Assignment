import React, { useState } from "react";
import styles from "./WarehouseCard.module.css"; // Import the CSS module

const ViewWarehouse = ({ item }) => {
  const [editData, setEditData] = useState({});

  const handleEdit = (item) => {

  };

  const handleView = (item) => {
      
    }

  return (
    <>
      <div className={styles.warehouseTable}> 
        <table className={styles.table}> 
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.type}</td>
              <td>
                <button onClick={() => handleView(item)} className={styles.editButton}>View</button>
                <button onClick={() => handleEdit(item)} className={styles.editButton}>Edit</button> 
                <button className={styles.deleteButton}>Delete</button> 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewWarehouse;
