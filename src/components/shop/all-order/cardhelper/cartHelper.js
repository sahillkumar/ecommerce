import { firestore } from "../../../../firebase/config"

export const allProductsInCart =async (userId) =>{
     let documents = []
    const docs = await firestore.collection('USERS').doc(userId).collection('cart').get()
    docs.forEach(doc=>{
          documents.push(doc.data())
     })
    return documents
   
}

export const addItemToCart = async (item,userId) =>{
     let flag = false;
     let cart = await firestore.collection('USERS').doc(userId).collection('cart').get()
     cart.forEach(doc=>{
          if(doc.data().id === item.id){
               flag = true;
          }
     })

     if(!flag){
          await firestore.collection('USERS').doc(userId).collection('cart').doc(item.id).set(item)
          console.log("added to cart");
     } else{
          console.log("already in cart");
     } 
 
}

export const removeItemFromCart = async (userId,productId) =>{
     await firestore.collection('USERS').doc(userId).collection('cart').doc(productId).delete()
     
}


