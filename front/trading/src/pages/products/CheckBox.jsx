import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SelectPage() {
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();

    const handleChange = (event) => {
        if (event.target.checked) {
            setSelectedItems([...selectedItems, event.target.value]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== event.target.value));
        }
    };

    const handleSubmit = () => {
        navigate('/order', { state: { selectedItems } });
    };

    return (
        <div>
            <label>
                <input type="checkbox" value="Product1" onChange={handleChange} />
                Product 1
            </label>
            <label>
                <input type="checkbox" value="Product2" onChange={handleChange} />
                Product 2
            </label>
            <button onClick={handleSubmit}>Order</button>
        </div>
    );
}

export default SelectPage;