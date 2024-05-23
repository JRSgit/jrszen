import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Meditacao() {
  return (
    <div className="w-full h-full bg-[#121212] ">
      <Header />

      <h1 className="text-white mt-10 text-xl md:text-4xl p-2 md:p-0">
        Hipinoterapia! pouco conhecida, mais muito efetiva.
      </h1>

      <div className="flex flex-col w-full h-full items-center justify-center gap-4">
        <p className="md:text-center text-justify indent-6 p-4 md:w-[70%] text-white mt-10 w-full text-md md:text-2xl mb-10">
          A hipnose é um estado de consciência alterado caracterizado por um alto
          grau de concentração, relaxamento e sugestionabilidade. Durante a hipnose,
          a pessoa está em um estado de consciência diferente do estado de vigília
          comum, mas não está totalmente inconsciente. Ela mantém um nível de
          controle sobre suas ações e respostas, mas é mais suscetível à sugestão.
          A hipnose é frequentemente usada em terapia (hipnoterapia) para tratar
          uma variedade de questões, como ansiedade, fobias, dor crônica e vícios.
        </p>

        <ul className="flex flex-col w-[90%] md:py-10 md:px-20 px-6 py-6 list-disc md:w-[80%] md:text-xl text-center gap-4 bg-white rounded-md">
          <h1 className="md:text-3xl text-xl text-justify indent-6 md:mb-5 ">
            A história da hipnose é longa e complexa,
            e suas origens remontam a culturas antigas.
            Aqui estão alguns marcos importantes em sua história:</h1>
          <div className="w-full">
            <h3 className="text-start">Ouça a historia em audio</h3>
            <audio src="" controls className="w-full rounded-md text-gray-500"></audio>
          </div>
          <li>
            Antiguidade: Registros históricos sugerem que práticas semelhantes à hipnose eram usadas em várias culturas antigas, incluindo os egípcios e os gregos. Templos egípcios, por exemplo, usavam rituais de sono para tratar doenças e aliviar dores.
          </li>
          <li>
            Franz Mesmer (1734-1815): O termo "hipnose" tem suas raízes no trabalho do médico austríaco Franz Mesmer. Ele desenvolveu uma teoria conhecida como "mesmerismo" e acreditava que o magnetismo pessoal poderia ser usado para curar doenças. Embora suas teorias tenham sido controversas e, em grande parte, desacreditadas pela comunidade médica de sua época, Mesmer é frequentemente associado às origens da hipnose.
          </li>
          <li>
            James Braid (1795-1860): O médico escocês James Braid é frequentemente considerado o pai da hipnose moderna. Ele introduziu o termo "hipnose" e desassociou a prática da teoria do magnetismo pessoal de Mesmer. Braid acreditava que a hipnose era um estado de concentração focalizada.
          </li>
          <li>
            Sigmund Freud (1856-1939): O famoso psicanalista Sigmund Freud também explorou a hipnose em seus primeiros trabalhos. Ele acreditava que a hipnose poderia ser usada como uma ferramenta terapêutica para acessar memórias reprimidas e explorar o inconsciente.
          </li>
          <li>
            Século 20: A hipnose ganhou popularidade como ferramenta terapêutica durante o século 20, com a hipnoterapia sendo usada no tratamento de várias condições médicas e psicológicas. No entanto, a hipnose também foi cercada por mitos e equívocos, o que levou a controvérsias em relação à sua eficácia e ética.
          </li>

        </ul>

        {/* =============================================================== */}

        <div className="flex flex-wrap w-full h-full gap-8 md:p-4 mt-10 mb-20">
          <ul className="flex flex-col md:py-5 md:px-10 px-6 py-6 list-disc flex-1 md:text-sm text-center gap-4 bg-white rounded-md shadow-xl shadow-slate-700">
            <h1 className="md:text-lg font-semibold text-sm mb-5 text-center">
              Você já considerou a hipnoterapia como uma ferramenta poderosa para melhorar o seu bem-estar? Se não, é hora de explorar os inúmeros benefícios que essa prática pode oferecer para a sua saúde física e mental.
            </h1>

            <div className="w-full">
              <h3 className="text-start">Ouça os beneficios em audio</h3>
              <audio src="" controls className=" rounded-md text-gray-500 h-10 p-2"></audio>
            </div>

            <li>
              <strong>Controle da Dor:</strong> Se você sofre de dor crônica, a hipnoterapia pode ser a solução que você procura. Estudos mostram que a hipnose pode reduzir a percepção da dor e até mesmo diminuir a necessidade de medicação.
            </li>
            <li>
              <strong>Gerenciamento do Estresse:</strong> Vivemos em um mundo repleto de estresse e ansiedade. A hipnoterapia oferece técnicas comprovadas para aliviar a tensão, acalmar o sistema nervoso e promover a tranquilidade.
            </li>
            <li>
              <strong>Parar de Fumar e Superar Vícios:</strong> Se você está lutando contra o tabagismo, álcool ou outros vícios, a hipnoterapia pode ser o seu aliado na jornada para a libertação. Ela ajuda a reduzir os desejos e a fortalecer sua determinação para uma vida mais saudável.
            </li>
            <li>
              <strong>Ansiedade e Depressão:</strong>
              A hipnoterapia é uma ferramenta eficaz para combater a ansiedade e a depressão. Ela ajuda a identificar e resolver as raízes desses problemas, restaurando seu equilíbrio emocional.
            </li>
          </ul>

          <ul className="flex flex-col md:py-5 md:px-10 px-6 py-6 list-disc flex-1 md:text-sm text-center gap-4 bg-white rounded-md shadow-xl shadow-slate-700">
            <h1 className="md:text-lg font-semibold text-sm mb-5 text-center ">
              A hipnoterapia é muito mais do que truques de mágica ou controle da mente; é uma técnica terapêutica respeitada, usada para promover mudanças positivas em diversos aspectos da sua vida. Aqui estão algumas razões pelas quais você deve considerar a hipnoterapia como um caminho para o seu bem-estar.
            </h1>
            <div className="w-full">
              <h3 className="text-start">Ouça os denais beneficios em audio</h3>
              <audio src="" controls className=" rounded-md text-gray-500 h-10 p-2"></audio>
            </div>
            <li>
              <strong>Autoestima e Confiança:</strong> Se você enfrenta desafios com autoestima e confiança, a hipnoterapia pode ajudar a reprogramar suas crenças limitantes, permitindo que você se veja de uma maneira mais positiva e confiante.
            </li>
            <li>
              <strong>Melhoria do Sono:</strong> A insônia é um problema comum, mas a hipnoterapia oferece técnicas eficazes para melhorar a qualidade do sono. Um sono reparador é crucial para a sua saúde e vitalidade.
            </li>
            <li>
              <strong>Mudança de Hábitos Alimentares: </strong> Se você luta com questões de peso ou hábitos alimentares não saudáveis, a hipnoterapia pode ajudar a reverter padrões de comportamento indesejados, promovendo escolhas mais saudáveis.
            </li>
            <li>
              <strong>Foco e Concentração: </strong> A hipnoterapia pode aprimorar sua capacidade de concentração, ajudando-o a atingir suas metas acadêmicas ou profissionais com mais eficiência.
            </li>
          </ul>

        </div>

        {/* ====================================================================== */}

        <ul className="flex flex-col w-[90%] md:py-10 md:px-20 px-6 py-6 list-disc md:w-[80%] text-sm md:text-lg text-center gap-4 bg-white rounded-md">
          <h1 className="md:text-2xl text-lg md:mb-10 ">
            A história da hipnose é longa e complexa,
            e suas origens remontam a culturas antigas.
            Aqui estão alguns marcos importantes em sua história:</h1>
          <div className="w-full">
            <h3 className="text-start">Ouça a historia em audio</h3>
            <audio src="" controls className=" rounded-md text-gray-500 h-10 p-2"></audio>
          </div>
          <li>
            Antiguidade: Registros históricos sugerem que práticas semelhantes à hipnose eram usadas em várias culturas antigas, incluindo os egípcios e os gregos. Templos egípcios, por exemplo, usavam rituais de sono para tratar doenças e aliviar dores.
          </li>
          <li>
            Franz Mesmer (1734-1815): O termo "hipnose" tem suas raízes no trabalho do médico austríaco Franz Mesmer. Ele desenvolveu uma teoria conhecida como "mesmerismo" e acreditava que o magnetismo pessoal poderia ser usado para curar doenças. Embora suas teorias tenham sido controversas e, em grande parte, desacreditadas pela comunidade médica de sua época, Mesmer é frequentemente associado às origens da hipnose.
          </li>
          <li>
            James Braid (1795-1860): O médico escocês James Braid é frequentemente considerado o pai da hipnose moderna. Ele introduziu o termo "hipnose" e desassociou a prática da teoria do magnetismo pessoal de Mesmer. Braid acreditava que a hipnose era um estado de concentração focalizada.
          </li>
          <li>
            Sigmund Freud (1856-1939): O famoso psicanalista Sigmund Freud também explorou a hipnose em seus primeiros trabalhos. Ele acreditava que a hipnose poderia ser usada como uma ferramenta terapêutica para acessar memórias reprimidas e explorar o inconsciente.
          </li>
          <li>
            Século 20: A hipnose ganhou popularidade como ferramenta terapêutica durante o século 20, com a hipnoterapia sendo usada no tratamento de várias condições médicas e psicológicas. No entanto, a hipnose também foi cercada por mitos e equívocos, o que levou a controvérsias em relação à sua eficácia e ética.
          </li>

        </ul>

        <div className="flex flex-wrap md:gap-10 w-full p-4 justify-center">
          <p className="text-white md:w-[48%] w-full p-4 flex-1 mt-10 text-lg md:text-xl text-center indent-6 ">
            A hipnoterapia é uma ferramenta poderosa para transformar sua vida e promover um bem-estar duradouro. Ela é segura, natural e não invasiva, permitindo que você seja o protagonista da sua própria jornada para a saúde e felicidade.
          </p>
          <p className="text-white md:w-[48%] p-4 mt-10 text-lg md:text-xl text-center indent-6 w-full">
            Não perca a oportunidade de experimentar os benefícios da hipnoterapia em sua vida. Descubra como essa técnica comprovada pode ajudar você a alcançar o bem-estar físico e mental que merece. Ouça os audio de auto hipinose e dê o primeiro passo em direção a uma vida mais plena, saudável e equilibrada. Sua jornada para o bem-estar começa agora.
          </p>
        </div>

        <Link to='/audio' className="p-4 bg-slate-300 rounded-md text-xl hover:bg-slate-100 transition-all hover:font-bold shadow-md shadow-cyan-700">
          Auto Hipinose
        </Link>

      </div>

      <Footer />
    </div>
  )
}

export default Meditacao