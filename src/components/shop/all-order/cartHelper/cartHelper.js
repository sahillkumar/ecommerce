import { firestore } from "../../../../firebase/config";

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

export const addItemToCart = async (item, userId) => {
  let flag = false;
  let cart = await firestore
    .collection("USERS")
    .doc(userId)
    .collection("cart")
    .get();
  cart.forEach((doc) => {
    if (doc.data().id === item.id) {
      flag = true;
    }
  });

  if (!flag) {
    await firestore
      .collection("USERS")
      .doc(userId)
      .collection("cart")
      .doc(item.id)
      .set(item);
    alert("Added to Cart");
  } else {
    alert("Product Already in Cart");
  }
};

export const removeItemFromCart = async (userId, productId) => {
  await firestore
    .collection("USERS")
    .doc(userId)
    .collection("cart")
    .doc(productId)
    .delete();
};

export const removeItemFromWishlist = async (userId, productId) => {
  await firestore
    .collection("USERS")
    .doc(userId)
    .collection("wishlist")
    .doc(productId)
    .delete();
};

export const addItemToWishlist = async (item, userId) => {
  let flag = false;
  let wishlist = await firestore
    .collection("USERS")
    .doc(userId)
    .collection("wishlist")
    .get();
  wishlist.forEach((doc) => {
    if (doc.data().id === item.id) {
      flag = true;
    }
  });

  if (!flag) {
    await firestore
      .collection("USERS")
      .doc(userId)
      .collection("wishlist")
      .doc(item.id)
      .set(item);
    alert("Added to Wishlist");
  } else {
    alert("Product Already in Wishlist");
  }
};
