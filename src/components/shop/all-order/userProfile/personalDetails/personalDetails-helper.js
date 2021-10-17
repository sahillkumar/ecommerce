import {firestore} from '../../../../../firebase/config';

export const fetchUserDetails = async(userId) =>{
    const info = await firestore
                .collection('USERS')
                .doc(userId)
                .collection("userInfo")
                .get();
    let user = [];
    info.forEach(doc => user.push(doc.data()));
 //   console.log(user[0]);
    return(user[0]);
}

export const saveUserDetails = async(userId, data) =>{
   const currentData = await firestore
        .collection("USERS")
        .doc(userId)
        .collection("userInfo")
        .limit(1)
        .get();

    const id = currentData?.docs[0]?.id;
    //console.log("id - ",{id, data});
    if(id){
        await firestore
        .collection("USERS")
        .doc(userId)
        .collection("userInfo")
        .doc(id)
        .update(data);
    }
    else{
        await firestore
        .collection("USERS")
        .doc(userId)
        .collection("userInfo")
        .add({data});
    }
}