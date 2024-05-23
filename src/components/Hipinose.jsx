import { useState, useEffect } from "react"

import Audios from "./Audios"
import hiponose from '../assets/hipinose.svg'

import { getDate } from '../services/GetDates'

function Hipinose() {
  const [dados, setDados] = useState(null)

  useEffect(() => {
    const isGetDate = async () => {
      const data = await getDate('hipinose')
      setDados(data)

    }
    isGetDate()
  }, [])

  console.log(dados)
  return (
    <div className="w-full h-full flex flex-col gap-1 items-center ">
      <h1 className="w-full text-white text-center text-2xl mt-5 mb-5">
        Mude sua vida com Auto Hipinose
      </h1>

      <div className="flex flex-col p-2 gap-2">
        {
          dados && dados.map((d) => (
            <Audios key={d.title} midia={d.url} title={d.title} />

          ))
        }

      </div>

      <img className="w-[300px]" src={hiponose} alt="" />


    </div>
  )
}

export default Hipinose