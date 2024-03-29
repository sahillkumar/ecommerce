import { firestore } from "../../../../firebase/config";
import {showToast} from '../../../toasts/toasts-helper';

export const allProductsInCart = async (userId) => {
  let documents = [];
  const docs = await firestore
    .collection("USERS")
    .doc(userId)
    .collection("cart")
    .get();
  docs.forEach((doc) => {
    documents.push(doc.data());
  });
  return documents;
};

export const addItemToCart = async (item, userId) => {
  let prods = JSON.parse(localStorage.getItem('cart'))
  prods.push(item.id)
  localStorage.setItem('cart',JSON.stringify(prods))
  try {
    await firestore
    .collection("USERS")
    .doc(userId)
    .collection("cart")
    .doc(item.id)
    .set(item);
  } catch (error) {
    showToast('error', "Error in adding item to cart");
    return;
  }
  showToast('success', 'Added to cart!')
  
};

export const removeItemFromCart = async (userId, productId) => {
  let prods = JSON.parse(localStorage.getItem('cart'))
  prods = prods.filter(doc => doc !== productId)
  localStorage.setItem('cart',JSON.stringify(prods))
 try {
  await firestore
  .collection("USERS")
  .doc(userId)
  .collection("cart")
  .doc(productId)
  .delete();
 } catch (error) {
  showToast('error', "Error in removing item from cart");
  return;
 }
 showToast('success', 'Removed from cart!')
      
};

export const allProductsInWishlist = async (userId) => {
  let documents = [];
  const docs = await firestore
    .collection("USERS")
    .doc(userId)
    .collection("wishlist")
    .get();
  docs.forEach((doc) => {
    documents.push(doc.data());
  });
  return documents;
};

export const removeItemFromWishlist = async (userId, productId) => {

  let prods = JSON.parse(localStorage.getItem('wishlist'))
  prods = prods.filter(doc => doc !== productId)
  localStorage.setItem('wishlist',JSON.stringify(prods))
  await firestore
    .collection("USERS")
    .doc(userId)
    .collection("wishlist")
    .doc(productId)
    .delete();
};

export const addItemToWishlist = async (item, userId) => {

  let prods = JSON.parse(localStorage.getItem('wishlist'))
  prods.push(item.id)
  
  localStorage.setItem('wishlist',JSON.stringify(prods))
  
  await firestore
    .collection("USERS")
    .doc(userId)
    .collection("wishlist")
    .doc(item.id)
    .set(item);
 
};

export const buynow = async (item,userId) =>{
  addItemToCart(item,userId)
  removeItemFromWishlist(userId,item.id)
}

export const moveToWishlist = (item,userId)=>{
  addItemToWishlist(item,userId)
  removeItemFromCart(userId,item.id)
}