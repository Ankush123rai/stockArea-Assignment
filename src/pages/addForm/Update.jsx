import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWarehouseDetails } from '../../redux/WarehouseSlice';
import styles from './Add.module.css';


const Update = ({ item, onSave}) => {
  const [formData, setFormData] = useState(item);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWarehouseDetails({ id: item.id, updatedItem: formData }));
    onSave(); 
  };

  return (
    <div className={styles.container}>
    <h1>Update Warehouse</h1>
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
        update Warehouse
      </button>
    </form>
  </div>
  );
};

export default Update;
