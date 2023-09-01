import Audios from './components/Audios'
import Header from './components/Header'

import relax from './assets/relax.mp3'
import relaxDay from './assets/relaxDay.mp3'
import intro from './assets/intro.mp4'

import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-full items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white mt-4 md:mt-16 text-center">
          Bem vindo a JRSzen
        </h1>
        <p className="text-sm md:text-2xl md:w-[40%] text-center text-white indent-6 w-[90%] md:mt-16 mt-4">
          Aqui você encontra um lugar para poder meditar e limpar sua mente,
          para obter a libertação da ansiedade e da depressão.
        </p>
        <video className='w-[300px]  mt-10' src={intro} controls />
      </div>

      <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-3 m-auto mt-10 py-4'>
        <div className="flex flex-col gap-3 w-fit px-10">
          <h2 className="text-white text-lg text-center">
            Audios para meditação.
          </h2>
          <div className='p-2 w-fit shadow-md shadow-gray-400'>
            <Audios title="Ates de Dormir" midia={relax} />
            <Audios title="Após Acordar" midia={relaxDay} />

          </div>
        </div>
        {/* <div className=' bg-blue-500'>
          Videos
        </div>
        <div className=' bg-blue-500'>
          Links
        </div> */}
      </div>

      <Footer />

    </>
  )
}

export default App
