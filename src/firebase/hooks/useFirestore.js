import { useEffect, useState } from "react"
import { firestore } from "../config"


const useFirestore = (collection) => {
   const [docs,setDocs] = useState([])

   useEffect(() => {
        const unsub = firestore.collection(collection).get()
            .then(docs=>{
                let documents = []
                docs.forEach(doc=>{
                    documents.push({
                        ...doc.data(),
                        id:doc.id
                    })
                })
                setDocs(documents)
            })
            .catch(err=>{
                console.log(err);
            })
        
        return ()=> unsub()

   },[collection])

   return docs
}

export default useFirestore
