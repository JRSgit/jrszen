import { useEffect, useState } from 'react'
import { collection, query, getDocs, } from "firebase/firestore";
import { Link } from 'react-router-dom';

import { db } from './firebase/firebase';
import './App.css'

import mind from './assets/mind.svg'
import audiomind from './assets/audiomind.svg'
import indiczen from './assets/idiczen.svg'
import livro from './assets/livro.png'

import Audios from './components/Audios'
import Header from './components/Header'
// import relax from './assets/relax.mp3'
// import relaxDay from './assets/relaxDay.mp3'
import intro from './assets/intro.mp4'

import Footer from './components/Footer'
import Hipinose from './components/Hipinose';
import Woof from './components/Woof';
import Banner from './components/Banner';

import { IoIosStar } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";

function App() {
  // const [audios, setAudios] = useState()
  // const [videos, setVideos] = useState()
  const [dados, setDados] = useState([])

  useEffect(() => {
    const getDate = async () => {
      const audioRef = collection(db, "audios");

      const q = query(audioRef);
      const d = await getDocs(q)
      let ar = []
      d.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        ar.push(data)
      });
      setDados(ar)
    }
    getDate()
  }, [])

  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-full items-center justify-center md:mb-20">
        {/* <h1 className="text-2xl md:text-4xl font-bold text-[#2E8B57] mt-4 md:mt-10 text-center">
          Atinja o Seu Bem-Estar Natural
        </h1> */}
        <Banner />
        {/* <video className='w-[300px]  mt-10' src={intro} controls /> */}
      </div>

      <div className='lg:w-1/2 md:w-[70%] w-full h-full grid grid-cols-1 gap-10 m-auto md:mt-10 mt-4 p-4'>
        <ul className='flex w-full flex-col  items-center justify-center md:mb-20'>
          <h1 className='md:text-6xl text-4xl'>Praticas Diarias</h1>
          <hr className='mb-5 md:mb-16 bg-[#2E8B57] text-[#2E8B57] h-[2px] w-full' />
          <li className='px-5 w-[80%] mb-5 p-3 rounded-md bg-[#FFFFFF] text-[#4A90E2]'>
            <Link className='md:px-20 text-xl md:text-3xl' to="/manhã">De Manhã</Link>
          </li>
          <li className='px-5 w-[80%] mb-5 p-3 rounded-md bg-[#4A90E2] text-[#FFFFFF]'>
            <Link className='md:px-20 text-xl md:text-3xl' to="/manhã">De Tarde</Link>
          </li>
          <li className='px-5 w-[80%] mb-5 p-3 rounded-md bg-[#2E8B57] text-[#FFFFFF]'>
            <Link className='md:px-20 text-xl md:text-3xl' to="/manhã">De Noite</Link>
          </li>
        </ul>

        <div className='flex flex-col w-full items-center justify-center bg-[#ffffff] rounded-md '>
          <h1 className='mb-10 text-4xl md:text-6xl py-4'>Metas Almejadas</h1>
          <div className='flex flex-col gap-3 w-full'>
            <div className='flex flex-col  items-center '>
              <img className='w-[120px] md:w-[250px] md:h-full bg-cover mb-2' src={livro}
                alt="" />
              <h3 className='text-[#7B68EE] text-xl mb-4 flex md:text-3xl flex-col items-center'>
                <div className='flex gap-2'>
                  <IoIosStar size={30} color="#6CB67C" />
                </div>
                Ler dois livros esse ano!
              </h3>
              <hr className='text-[#2E8B57] h-8 w-[90%] ' />
            </div>
            <div className='flex flex-col  items-center '>
              <img className='w-[120px] md:w-[250px] md:h-full bg-cover mb-2' src={livro}
                alt="" />
              <h3 className='text-[#7B68EE] text-xl mb-4 flex md:text-3xl flex-col items-center'>
                <div className='flex gap-2'>
                  <IoIosStar size={30} color="#6CB67C" />
                  <IoIosStar size={30} color="#6CB67C" />
                </div>
                Ler dois livros esse ano!
              </h3>
              <hr className='text-[#2E8B57] h-8 w-[90%] ' />
            </div>
            <div className='flex flex-col  items-center '>
              <img className='w-[120px] md:w-[250px] md:h-full bg-cover mb-2' src={livro}
                alt="" />
              <h3 className='text-[#7B68EE] text-xl mb-4 flex md:text-3xl flex-col items-center'>
                <div className='flex gap-2'>
                  <IoIosStar size={30} color="#6CB67C" />
                  <IoIosStar size={30} color="#6CB67C" />
                  <IoIosStar size={30} color="#6CB67C" />
                </div>
                Ler dois livros esse ano!
              </h3>
              {/* <hr className='text-[#2E8B57] h-8 w-[90%] ' /> */}
            </div>
          </div>
        </div>

        <Link to=""
          className='w-full md:text-3xl rounded-xl text-[#ebebeb] text-xl font-bold px-10 p-4 bg-[#6CB67C] border border-[#ebebeb]'>
          Definir minhas Metas
        </Link>

        <div className='flex flex-col w-full md:mt-16 gap-2 bg-white rounded-md p-2 items-center'>
          <h1 className="text-4xl md:text-6xl py-4">Obter Auto Controle</h1>
          <p className="text-md md:text-xl indent-8 text-center md:w-[70%]">
            Para se obter auto controle apenas a decisão não serve,
            é preciso ação, que envolve diciplina, postura, exercicios de respiração,
            e uma rotima diaria.
          </p>
          <h3 className="flex flex-col items-center justify-center text-2xl md:text-3xl text-[#7B68EE]">
            Quer aprender
            <FaArrowDown size={40} color='#6CB67C' />
          </h3>
          <Link to="" className='px-10 md:mb-10 mb-4 py-3 bg-[#6cb67c] text-white w-fit rounded-md'>
            Siba Mais!
          </Link>
        </div>

        {/* =================================== */}

      </div>

      <div className='w-full bg-slate-800 p-4'>
        <h1 className="text-4xl md:text-6xl py-4">Use nossos produtos</h1>
        <p className='text-md md:text-xl text-center md:w-[70%] text-white mb-3'>
          Tenha um material de acompanhamento e metas, como passeiro nessa sua jornada.
        </p>
        <div className='flex-col md:flex'>
          <img className='w-[150px] md:w-[300px] mb-5' src="./assets/mapa.jpg" alt="" />
          <span className='px-4 py-2 bg-[#6cb67c] rounded-2xl mr-2 border border-[#3a6243]'>Plamer</span>
          <span className='px-4 py-2 bg-[#6cb67c] rounded-2xl mr-2 border border-[#3a6243]'>Ebook</span>
          <span className='px-4 py-2 bg-[#6cb67c] rounded-2xl mr-2 border border-[#3a6243]'>Mapas Mentais</span>
        </div>
      </div>

      {/* <div>
        <p>
          O Renascimento de Ana Paula. Ana Paula era uma mulher como tantas outras. Casada com Marcos, mãe amorosa de dois filhos, ela enfrentava os desafios do dia a dia com bravura. No entanto, nos últimos tempos, algo começou a minar sua força interior.
          Noites insones, falta de ânimo e uma fadiga persistente se tornaram seus companheiros constantes. Preocupada, Ana decidiu buscar ajuda médica. Foi então que o diagnóstico veio: ela estava à beira de um surto depressivo.O médico prescreveu alguns
          medicamentos para ajudar a aliviar seus sintomas. Ana Paula os tomou religiosamente, na esperança de encontrar alívio para seu sofrimento. No entanto, os efeitos colaterais se mostraram cruéis. Seu corpo inchou, o peso aumentou, e a falta de disposição
          persistia.Desesperada por uma solução que não envolvesse apenas pílulas, Ana começou a pesquisar alternativas. Foi então que encontrou um este site. Intrigada e esperançosa, decidiu seguir as orientações aqui propostas. Com determinação, Ana começou a
          incorporar pequenas práticas em sua rotina diária. Meditação pela manhã, respiração consciente durante o dia e um planejamento cuidadoso de suas atividades. No início, os resultados foram sutis, mas ela persistiu.Seis meses se passaram desde que
          Ana começou sua jornada de autodescoberta e autocuidado. E o que ela descobriu foi além de suas expectativas mais otimistas. Gradualmente, ela recuperou sua energia perdida, seu corpo encontrou um equilíbrio saudável, e sua mente se tornou tranquila.
          Com o tempo, Ana Paula não apenas abandonou os medicamentos prescritos, mas também abraçou uma vida totalmente nova. Ela se tornou uma versão melhor de si mesma - uma pessoa cheia de vitalidade, felicidade e gratidão.Hoje, Ana desfruta de uma noite de
          sono tranquila, uma disposição invejável e, acima de tudo, uma família feliz. Sua jornada de transformação não foi fácil, mas cada obstáculo superado valeu a pena.Ana Paula é um exemplo vivo de que é possível encontrar a luz mesmo nos momentos mais sombrios.
          Sua história inspiradora nos lembra que a cura está ao nosso alcance, se tivermos coragem para buscar por ela e fé para acreditar em sua possibilidade.
          Assim como Ana Paula, você também pode transformar sua jornada de escuridão em luz, encontrando no poder da meditação, da respiração e do planejamento diário, do uso suplementos e demais produtos maturais o caminho para uma vida plena e feliz.
          Comece hoje mesmo a sua jornada de transformação, adotando essas práticas simples. Sua vida merece ser vivida com plenitude e felicidade. Não espere mais, dê o primeiro passo agora!" Siga os passos logo abaixo.
        </p>
      </div> */}


      <Footer />

    </>
  )
}

export default App
