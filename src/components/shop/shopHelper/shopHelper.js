import { firestore } from "../../../firebase/config";

export const getAllSortedProducts = async (field, direction) => {
  let documents = [];
  const docs = await firestore
    .collection("PRODUCTS")
    .orderBy(field, direction)
    .get();
  docs.forEach((doc) => {
    documents.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return documents;
};

// export const getProductsByCategory = async (value) =>{
//     let documents = []
//     const docs = await firestore.collection('PRODUCTS').where('category.title','==',value).get()
//         docs.forEach(doc=>{
//             documents.push({
//                 ...doc.data(),
//                 id:doc.id
//             })
//         })

//     return documents
// }

export const sortProductsByCategory = async (value, field, direction) => {
  let documents = [];
  const docs = await firestore
    .collection("PRODUCTS")
    .where("category.title", "==", value)
    .orderBy(field, direction)
    .get();
  docs.forEach((doc) => {
    documents.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return documents;
};

export const getProductByID = async (id) => {
  //console.log(id);
  const prodRef = await firestore.collection("PRODUCTS").doc(id).get();
  let doc = prodRef.data();
  if (doc) console.log("DOC", doc);
  return prodRef.data();
};
