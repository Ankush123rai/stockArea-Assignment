import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/WarehouseSlice";
import { useNavigate } from "react-router-dom";
import styles from "./Add.module.css";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    city: "",
    space_available: "",
    type: "",
    cluster: "",
    is_registered: false,
    is_live: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ formData }));
    console.log(formData);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>Add Warehouse</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.label}>Code:</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.label}>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.label}>Space Available:</label>
          <input
            type="number"
            name="space_available"
            value={formData.space_available}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.label}>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_group}>
          <label className={styles.label}>Cluster:</label>
          <input
            type="text"
            name="cluster"
            value={formData.cluster}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_group}>
          <div className={styles.checkbox_label}>
            <input
              type="checkbox"
              name="is_live"
              checked={formData.is_live}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <span>Is Live</span>
          </div>
        </div>
        <div className={styles.form_group}>
          <div className={styles.checkbox_label}>
            <input
              type="checkbox"
              name="is_registered"
              checked={formData.is_registered}
              onChange={handleInputChange}
              className={styles.checkbox}
            />
            <span>Is Registered</span>
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Add Warehouse
        </button>
      </form>
    </div>
  );
};

export default Add;
