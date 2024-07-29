import { collection, addDoc } from "firebase/firestore";
import { db } from './config.js';
import { doc, updateDoc, deleteDoc} from "firebase/firestore"

export async function save(data){
   try {
    const dbCollection = collection(db, 'tasks');
    const docRef = await addDoc(dbCollection, data);
    console.log("Document written with ID:",docRef.id)
    return docRef.id
   } catch(error){
    console.log("Error:", error)
   }
}

export async function update(id, data){
    try {
        console.log("update", id, data)
        const docRef = doc(db, 'tasks', id);
        const result = await updateDoc(docRef, data);
        console.log('Result:', result) 
        return true
    }  catch(error){
        console.log("Error: ", error)
        return false
    }
}

export async function remove(id){
    try {
        const docRef = doc(db, 'tasks', id);
        await deleteDoc(docRef);
        return true
    } catch(error) {
        console.log("Error: ", error)
    }
}