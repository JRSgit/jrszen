import Form from "../components/Form";
import Header from "../components/Header";

import { useState } from "react";
import Logo from "../components/Logo";
import Editors from "../components/Editor";

function StoreFile() {
  const [audio, setAudio] = useState(false)
  const [video, setVideo] = useState(false)
  const [hipinose, setHipinose] = useState(true)
  const [user, setUser] = useState(false)

  const handleClick = (a, v, s, u) => {
    setAudio(a)
    setVideo(v)
    setHipinose(s)
    setUser(u)
  }

  return (
    <>
      <Header />
      <div className="relative w-full h-screen flex  justify-center items-center">
        <div className="flex md:flex-col gap-2 absolute p-2 top-0 left-0 bg-slate-700 md:w-[100px] w-full md:h-full h-fit">
          <button
            onClick={() => handleClick(false, false, true, false)}
            className="p-2 bg-gray-300 transition-all rounded-md hover:bg-white text-sm">Hipinose</button>
          <button
            onClick={() => handleClick(true, false, false, false)}
            className="p-2 bg-gray-300 transition-all rounded-md hover:bg-white text-sm">Meditação</button>
          <button
            onClick={() => handleClick(false, true, false, false)}
            className="p-2 bg-gray-300 transition-all rounded-md hover:bg-white text-sm">Videos</button>
          <button
            onClick={() => handleClick(false, false, false, true)}
            className="p-2 bg-gray-300 transition-all rounded-md hover:bg-white text-sm">Resp. Guiada</button>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center p-4 md:mt-0 mt-[60px]">

          <Logo />
          <h1 className="text-white font-bold text-3xl text-center mb-10 mt-10">Painel Administrativo</h1>
          <div className="w-[50%] grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* <Form path="audios" name="audio" /> */}
            {video && <Form path="videos" name="video" />}
            {audio && <Form path="audios" name="meditação" />}
            {hipinose && <Form path="hipinose" name="hipinose" />}
            {user && <Form path="resp" name="respiracao" />}

          </div>

          <Editors />

        </div>




        {/* =========================== */}

      </div>
    </>
  )
}

export default StoreFile