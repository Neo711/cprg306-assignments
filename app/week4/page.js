import { useState } from 'react';

function component()  {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log(item);
    };

    return(
        <form onSubmit={handleSubmit}>
            <button type="Submit">Submit</button>
        </form>

    );
}