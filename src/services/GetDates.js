import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { db } from '../firebase/firebase';


const getDate = async (path) => {
  const audioRef = collection(db, path);
  const q = query(audioRef);
  const d = await getDocs(q)
  let ar = []
  d.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const data = doc.data();
    ar.push(data)
  });
  return ar
}



export { getDate }