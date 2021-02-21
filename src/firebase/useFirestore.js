import { useState,useEffect } from "react"
import { firestore } from "./config"

const useFirestore = (collection) => {
    console.log('call from ',collection);
    const [docs, setDocs] = useState([])
    useEffect(() => {
        let documents = []
        const unsub =  firestore.collection(collection).onSnapshot(docs=>{
            docs.forEach(doc=>{
            documents.push({
                ...doc.data(),
                id:doc.id
                })
            })
            setDocs(documents)
        })
        return () =>{
            unsub()
            console.log('unsubbed from ',collection);
        }
    }, [collection])
    return docs
}

export default useFirestore
