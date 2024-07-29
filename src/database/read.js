import { collection, getDocs } from "firebase/firestore";
import { db } from './config.js';


export async function load() {

    const data = [];
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        querySnapshot.forEach((doc) => {
            data.push({
                ...doc.data(),
                id: doc.id
            });
        });
    } catch (error){
        console.error("Error loading firebase", error)
    }

    return data;
}