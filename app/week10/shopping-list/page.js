"use client";

import React, { useState } from 'react';
import NewItem from './new-item.js';  
import ItemList from './item-list.js'; 
import MealIdeas from './meal-ideas.js';  
import itemsData from './items.json'; 

function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(''); 

    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    const handleItemSelect = (selectedItem) => { 
        const cleanedName = selectedItem.name.split(',')[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <div style={{ display: 'flex' }}> {/* Step 4: Update layout */}
            <div> {/* Wrap NewItem and ItemList in a div */}
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as ingredient prop */}
        </div>
    );
}

export default Page;
