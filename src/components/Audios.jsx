import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

// import { db } from '../firebase/firebase'
// import { collection, query, getDocs, orderBy, limit } from "firebase/firestore";


function Audios({ title, midia }) {
  // const [dados, setDados] = useState([])

  // const getDate = async (n = 1) => {
  //   const citiesRef = collection(db, path);


  //   const q = query(citiesRef, orderBy("title", "asc"), limit(n * 5));
  //   const d = await getDocs(q)
  //   let ar = []
  //   d.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     let data = doc.data();
  //     data.id = doc.id
  //     ar.push(data)
  //   });
  //   setDados(ar)
  // }

  // useEffect(() => {
  //   getDate()
  // }, [])

  return (
    <div className="flex flex-col gap-2  bg-gray-800 p-2 rounded-md mb-10">
      <h1 className="text-white text-md text-center">{title}</h1>
      <audio className="bg-transparent" controls src={midia} mediaGroup='mp3'></audio>
    </div>
  )
}

Audios.propTypes = {
  title: PropTypes.string.isRequired,
  midia: PropTypes.any.isRequired,
}

export default Audios