// Import Database Instance
import { database } from "../..";

// Import DatabaseAPI Functions
import {ref, update} from "firebase/database"

export function createUserInDatabase(name, email, id){
    update(ref(database,`user/${id}`),{
        id:id,
        name:name,
        email:email
    })
}
export function setUserNameInDatabase(name, id){
    update(ref(database,`user/${id}`),{
        name:name
    })
}