import { useState, useEffect } from "react";
import { collection, addDoc, deleteDoc, doc, query, getDocs, orderBy, limit } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from '../firebase/firebase'

import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

import { BsTrash } from 'react-icons/bs'


function Form({ path, name }) {
  const [dados, setDados] = useState([])
  const [reload, setReload] = useState(false)

  const { handleSubmit, register, reset } = useForm(
    {
      defaultValues: {
        title: '',
        file: {},

      }
    }
  )
  // const [audio, setAudio] = useState("")
  const [progres, setProgres] = useState()
  const [progresBoolean, setProgresBoolean] = useState(false)
  // const [title, setTitle] = useState('')
  // const [file, setFile] = useState('')

  // =====================================
  const store = async (data) => {
    // event.preventDefault();


    const file = data.file[0]

    const storageRef = ref(storage, `${path}/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {

        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgres(progress)
        setProgresBoolean(true)

      },
      (error) => {
        console.log(error)

      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // setAudio(downloadURL);
          storeTitle(data, downloadURL)
          reset()
          setProgresBoolean(false)
          setReload(!reload)
        })
      }
    );
  }

  const storeTitle = async (data, urlFire) => {
    await addDoc(collection(db, path), {
      name: data.file[0].name,
      title: data.title,
      url: urlFire
    });
  }

  const handleTrash = async (id, name) => {
    try {
      console.log(name)
      const isDelete = confirm("Tem certeza em excluir esse arquivo?")
      if (!isDelete) return
      const desertRef = ref(storage, `${path}/${name}`);
      await deleteDoc(doc(db, path, id));
      deleteObject(desertRef).then(() => {
        console.log("sucesso")
      }).catch((error) => {
        console.log(error)
      });
      setReload(!reload)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getDate()
  }, [reload])

  const getDate = async (n = 1) => {
    const citiesRef = collection(db, path);


    const q = query(citiesRef, orderBy("title", "asc"), limit(n * 5));
    const d = await getDocs(q)
    let ar = []
    d.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let data = doc.data();
      data.id = doc.id
      ar.push(data)
    });
    setDados(ar)
  }

  return (
    <>
      <form
        className="m-0 flex flex-col items-center w-full md:w-fit h-fit bg-slate-200 p-4 rounded-md"
        onSubmit={handleSubmit(store)}>
        <h1 className="text-2xl font-light text-center mb-6">
          Envie os arquivo de {name}
        </h1>
        <label className="bg-transparent" htmlFor="title">Titulo do Arquivo:</label>
        <input
          required
          className="p-2 outline-none w-full border-none bg-gray-500 rounded-md text-white"
          {...register('title')}
          type="text" placeholder="Titulo do aquivo" name="title" />
        <input
          required
          {...register('file')}
          className="p-2 mb-10 w-full" type="file" name="file" />
        <input className="bg-blue-400 w-fit p-2 hover:cursor-pointer rounded-md" type="submit" value="Enviar" />
        <br className="mt-5" />

        {progresBoolean &&
          <div>
            <h1 className="text-center ">{Math.floor(progres)}%</h1>
            <progress className="rounded-md" value={progres} max="100" />
          </div>
        }

      </form>

      <div className="flex flex-col md:w-fit w-full rounded-md p-4 bg-white max-h-[80%]">
        <h2 className="text-center font-normal  text-2xl">Arquivos de {name} salvos no site</h2>
        <ul className="flex flex-col gap-2 bg-transparent pr-4 pt-4 overflow-y-scroll">
          {
            dados && dados.map((date) => (
              <li key={date.id}
                className="flex flex-col justify-between gap-2  p-2 border-b-2 border-gray-400  mb-2 w-full">
                <div className="w-full flex justify-between bg-transparent items-center">
                  <span className="text-xl">{date.title}</span>
                  <BsTrash
                    onClick={() => handleTrash(date.id, date.name)}
                    size={40}
                    color="red"
                    className="p-2 hover:bg-black hover:cursor-pointer transition-all bg-gray-200 rounded-md w-fit " />
                </div>
                {
                  name === "video" ? (
                    <video className="w-[80px] max-h-20 m-0" controls src={date?.url} />
                  ) :
                    (
                      <audio className="md:w-fit w-full rounded-md" src={date?.url} controls></audio>
                    )

                }
              </li>
            ))
          }

        </ul>
      </div>
    </>

  )
}

Form.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

}

export default Form