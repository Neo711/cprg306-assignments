import React from 'react';

function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={() => onSelect(name, quantity, category)}>
            <strong>Name:</strong> {name} |
            <strong>Quantity:</strong> {quantity} |
            <strong>Category:</strong> {category}
        </li>
    );
}

export default Item;
