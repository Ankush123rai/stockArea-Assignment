import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWarehouseDetails } from '../../redux/WarehouseSlice';

const Add = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    city: '',
    space_available: '',
    type: '',
    cluster: '',
    is_registered: false,
    is_live: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWarehouseDetails({ item: formData }));
  };

  return (
    <div>
      <h1>Add Warehouse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Code:</label>
          <input type="text" name="code" value={formData.code} onChange={handleInputChange} />
        </div>
        <div>
        <div>
            <label>City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
        </div>
        </div>
        <div>
            <label>Space Available:</label>
            <input type="number" name="space_available" value={formData.space_available} onChange={handleInputChange} />
        </div>
        <div>
            <label>Type:</label>
            <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
        </div>
        <div>
            <label>Cluster:</label>
            <input type="text" name="cluster" value={formData.cluster} onChange={handleInputChange} />
        </div>
        <div>
            <label>Is Registered:</label>
            <input type="checkbox" name="is_registered" checked={formData.is_registered} onChange={handleInputChange} />
        </div>
        <div>
            <label>Is Live:</label>
            <input type="checkbox" name="is_live" checked={formData.is_live} onChange={handleInputChange} />
          <button type="submit">Add Warehouse</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
