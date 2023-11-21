import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    // Initialize Firestore
    const db = getFirestore();

    // Create an array to hold the items
    let items = [];

    try {
        // Reference to the user's items subcollection
        const itemsRef = collection(db, `users/${userId}/items`);

        // Fetch the documents in the items subcollection
        const querySnapshot = await getDocs(itemsRef);

        // Iterate over each document
        querySnapshot.forEach(doc => {
            // Add an object containing the document ID and data to the items array
            items.push({ id: doc.id, data: doc.data() });
        });

        // Return the items array
        return items;
    } catch (error) {
        // Handle any errors (e.g., user not found, network issues)
        console.error("Error fetching items: ", error);
        throw error;
    }
}


async function addItem(userId, item) {
    // Initialize Firestore
    const db = getFirestore();

    try {
        // Reference to the user's items subcollection
        const itemsRef = collection(db, `users/${userId}/items`);

        // Add the new item to the subcollection
        const docRef = await addDoc(itemsRef, item);

        // Return the ID of the newly created document
        return docRef.id;
    } catch (error) {
        // Handle any errors (e.g., invalid user ID, network issues)
        console.error("Error adding item: ", error);
        throw error;
    }
}

export default { getItems, addItem };