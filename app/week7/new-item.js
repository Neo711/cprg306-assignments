'use client'


import React, { useState } from 'react';

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = { name, quantity, category };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <label className="block mb-4">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 p-2 w-full border rounded text-gray-900" />
      </label>

      <label className="block mb-4">
        Quantity:
        <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="mt-2 p-2 w-full border rounded text-gray-900" />
      </label>

      <label className="block mb-4">
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-2 p-2 w-full border rounded text-gray-900">
        <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </label>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Item</button>
    </form>
  );
}

export default NewItem;
