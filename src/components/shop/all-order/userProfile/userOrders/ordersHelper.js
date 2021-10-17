import {firestore} from '../../../../../firebase/config';

export const fetchAllOrders = async(userId) => {

    //check collection order
    // if doesnt exist, create one
    // do accordingly

    let orders = [];
    const docs = await firestore
        .collection("USERS")
        .doc(userId)
        .collection("order")
        .get();
    
    docs.forEach(doc => {
        //console.log("pushing this =", doc.data().productsincart);
        orders.push(doc.data().productsincart)});
    return orders;
}

export const addToOrders = async(userId, currentOrder) => {
   /*  let prevOrders = await firestore
        .collection("USERS")
        .doc(userId)
        .collection("ORDERS")
        .get();
    */
  
    // invoked inside paymentHelper.js
    console.log("Adding this = ", currentOrder);
   await firestore
    .collection("USERS")
    .doc(userId)
    .collection("order")
    .add(currentOrder);

}