import {firestore} from '../../../../../firebase/config';

export const fetchUserDetails = async(userId) =>{
    const data = await firestore
                .collection('USERS')
                .doc(userId)
                .collection("userInfo")
                .get()
                .data();
    console.log("user data =", data);
    return data;
}

export const saveUserDetails = async(userId, data) =>{
   const currentData = await firestore
        .collection("USERS")
        .doc(userId)
        .collection("userInfo")
        .limit(1)
        .get();

    const id = currentData.docs[0].id;
    await firestore
        .collection("USERS")
        .doc(userId)
        .collection("userInfo")
        .doc(id)
        .update(data);
}