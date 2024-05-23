import { useState, useEffect } from 'react'

import Audios from './Audios'
import breathing from '../assets/breathing.svg'

import { getDate } from '../services/GetDates'

function Woof() {
  const [dados, setDados] = useState(null)

  useEffect(() => {
    const isGetDate = async () => {
      const data = await getDate('resp')
      setDados(data)

    }
    isGetDate()
  }, [])

  return (
    <div className="w-full h-full flex flex-col gap-1 items-center ">
      <h1 className="w-full text-white text-center text-2xl mt-5 mb-5">
        Veja como a Respiração pode te ajudar
      </h1>

      <div className="flex flex-col p-2 gap-2">
        {
          dados && dados.map((d) => (
            <Audios key={d.title} midia={d.url} title={d.title} />
          ))
        }

      </div>

      <img className="w-[300px]" src={breathing} alt="" />


    </div>
  )
}

export default Woof