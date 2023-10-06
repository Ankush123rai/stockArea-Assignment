import React, { useState } from "react";
import styles from "./WarehouseCard.module.css";
import { useDispatch } from "react-redux";
import { deleteWarehouseDetails } from "../../redux/WarehouseSlice";
import Update from "../../pages/addForm/Update";
import { Link } from "react-router-dom";

const ViewWarehouse = ({ item }) => {
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const handleEdit = (item) => {
    setEditData(item);
    setIsEditing(true);
  };

  const handleView = (item) => {
    setEditData(item);
  };

  const handleDelete = () => {
    dispatch(deleteWarehouseDetails({ id: item.id }));
    alert("Warehouse Deleted");
  };

  const handleEditCancel = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className={styles.warehouseTable}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.type}</td>
              <div className={styles.buttonContainer}>
              <Link to={`/${item.id}`}>
                  <button
                    onClick={() => handleView(item)}
                    className={styles.viewButton}
                  >
                    View
                  </button>
                </Link>
                <button
                  onClick={() => handleEdit(item)}
                  className={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
      {isEditing ? (
        <Update
          item={editData}
          onSave={handleEditCancel}
          onCancel={handleEditCancel}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ViewWarehouse;
