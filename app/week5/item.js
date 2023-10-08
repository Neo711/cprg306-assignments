import React from'react';

function Item({ name, quantity, category})  {
    return (
        <li>
            <strong>Name:</strong> {name} |
            <strong>Quantity:</strong> {quantity} |
            <strong>Category:</strong> {category}
        </li>
    );
}

export default Item;