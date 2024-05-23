import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Meditacao() {
  return (
    <div className="w-full h-full bg-[#121212] ">
      <Header />

      <h1 className="text-white mt-10 text-xl md:text-4xl p-2">Meditação! Algo tão simples, mais muito poderoso.</h1>

      <div className="flex flex-col w-full h-full items-center justify-center">
        <p className="text-center indent-6 p-4 md:w-[70%] text-white mt-10 md:text-2xl mb-10">
          A meditação é um campo de pesquisa ativo na neurociência,
          e diversos estudos têm investigado os efeitos dessa prática
          sobre a mente e o corpo. Embora os resultados possam variar de
          pessoa para pessoa e dependam do tipo de meditação praticada,
          aqui estão alguns efeitos geralmente observados.
        </p>

        <ul className="flex flex-col w-[90%] md:py-10 md:px-20 px-6 py-6 list-disc md:w-[80%] md:text-xl text-center gap-4 bg-white rounded-md">
          <h1 className="md:text-4xl text-2xl mb-10 ">Efeitos observados com a pratica da meditação</h1>
          <div className="w-full">
            <h3 className="text-start">Ouça o beneficios em audio</h3>
            <audio src="" controls className="w-full rounded-md text-gray-500"></audio>
          </div>
          <li>
            <strong>Redução do estresse:</strong> A meditação é conhecida por reduzir os níveis de cortisol, um hormônio relacionado ao estresse, no corpo. Isso pode levar a uma sensação geral de relaxamento e bem-estar.
          </li>
          <li>
            <strong>Melhora da saúde mental:</strong> A meditação regular tem sido associada a melhorias na saúde mental, incluindo a redução dos sintomas de ansiedade e depressão. Ela pode ajudar as pessoas a lidar melhor com o estresse e a regular as emoções.
          </li>
          <li>
            <strong>Aumento da concentração e atenção:</strong> A prática da meditação, especialmente a meditação mindfulness (atenção plena), pode aprimorar a capacidade de concentração e foco, aumentando a atenção plena no momento presente.
          </li>
          <li>
            <strong>Mudanças estruturais no cérebro:</strong> Estudos de neuroimagem mostraram que a meditação pode levar a alterações na estrutura do cérebro, como um aumento na densidade de matéria cinzenta em áreas relacionadas à memória, aprendizado e regulação emocional.
          </li>
          <li>
            <strong>Redução da atividade da "mente tagarela":</strong> A meditação pode ajudar a diminuir a atividade da mente, que muitas vezes está constantemente pensando, planejando ou se preocupando. Isso pode levar a uma sensação de tranquilidade e clareza mental.
          </li>
          <li>
            <strong>Melhora na qualidade do sono:</strong> Algumas formas de meditação, como a meditação de atenção plena, têm sido associadas a melhorias na qualidade do sono, ajudando as pessoas a adormecer mais facilmente e a ter um sono mais profundo.
          </li>
          <li>
            <strong>Regulação do sistema nervoso:</strong> A meditação também pode ajudar a regular o sistema nervoso autônomo, resultando em uma resposta de relaxamento mais eficaz em situações estressantes.
          </li>
          <li>
            <strong>Aumento da empatia e compaixão:</strong> Algumas práticas de meditação, como a meditação da compaixão, têm o potencial de aumentar a empatia e a compaixão em relação aos outros, promovendo relacionamentos mais saudáveis.
          </li>

        </ul>

        {/* =============================================================== */}

        <div className="flex flex-wrap w-full h-full gap-8 md:p-4 mt-10 mb-20">
          <ul className="flex flex-col md:py-5 md:px-10 px-6 py-6 list-disc flex-1 md:text-sm text-center gap-4 bg-white rounded-md shadow-xl shadow-slate-700">
            <h1 className="md:text-2xl font-semibold text-lg mb-5 text-center">
              Transforme Sua Vida com a Meditação Guiada: Descubra Seu Potencial Interior
            </h1>

            <p className="w-full indent-6 text-md">
              Você já sentiu que a agitação do mundo moderno está minando sua paz
              interior, sua clareza mental e seu equilíbrio emocional? Você não
              está sozinho. Todos nós enfrentamos desafios diários que podem afetar
              nossa saúde e bem-estar. A boa notícia é que existe uma maneira
              comprovada de recuperar o controle, encontrar a serenidade e
              desbloquear seu verdadeiro potencial: a meditação guiada.
            </p>

            <div className="w-full">
              <h3 className="text-start">Ouça os beneficios em audio</h3>
              <audio src="" controls className=" rounded-md text-gray-500 h-10 p-2"></audio>
            </div>

            <li>
              <strong>Redução do Estresse e Ansiedade: </strong>
              A meditação guiada é uma ferramenta eficaz para aliviar o estresse e a ansiedade. Ela ajuda a acalmar o sistema nervoso, reduzir os níveis de cortisol (hormônio do estresse) e promover uma sensação duradoura de tranquilidade.
            </li>
            <li>
              <strong>Melhora na Qualidade do Sono: </strong>
              Se você sofre de insônia ou dificuldades para dormir, a meditação guiada pode ser a solução. Ela prepara sua mente e corpo para um sono profundo e reparador.
            </li>
            <li>
              <strong>Aumento da Concentração e Foco:</strong>
              A meditação guiada melhora a concentração e a clareza mental, permitindo que você seja mais produtivo e tome decisões com mais facilidade.
            </li>
            <li>
              <strong>Controle das Emoções: </strong>
              Através da meditação guiada, você aprenderá a reconhecer e gerenciar suas emoções, tornando-se mais resiliente diante dos desafios da vida.
            </li>
          </ul>

          <ul className="flex flex-col md:py-5 md:px-10 px-6 py-6 list-disc flex-1 md:text-sm text-center gap-4 bg-white rounded-md shadow-xl shadow-slate-700">
            <h1 className="md:text-2xl font-semibold text-lg mb-5 text-center ">
              O que é a Meditação Guiada?
            </h1>
            <p className="w-full indent-6 text-md ">
              A meditação guiada é uma técnica simples e poderosa que utiliza a
              voz de um instrutor especializado para conduzi-lo a um estado de
              relaxamento profundo e foco interior. Com suas palavras tranquilizadoras,
              a meditação guiada o levará a uma jornada de autoconhecimento e
              autorreflexão, permitindo que você explore sua mente,
              corpo e espírito de maneira profunda.
            </p>
            <div className="w-full">
              <h3 className="text-start">Ouça os denais beneficios em audio</h3>
              <audio src="" controls className=" rounded-md text-gray-500 h-10 p-2"></audio>
            </div>
            <li>
              <strong>Autoestima e Confiança:</strong>
              A meditação guiada ajuda a desenvolver uma autoimagem positiva, promovendo a autoestima e a confiança em si mesmo.
            </li>
            <li>
              <strong>Alívio da Dor:</strong>
              Para aqueles que sofrem de dor crônica, a meditação guiada pode reduzir a percepção da dor e melhorar a qualidade de vida.
            </li>
          </ul>
          <div className="flex w-full flex-col mt-10 px-6  justify-center text-white">
            <h1 className="md:text-4xl text-xl mb-10">
              Comece Sua Jornada de Transformação Hoje!
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-4">
              <p className="w-full indent-6 text-md md:w-[48%] p-6 md:text-xl bg-slate-700 rounded-md">
                A meditação guiada é uma maneira acessível e eficaz de melhorar
                sua saúde física e mental. Com apenas alguns minutos por dia,
                você pode experimentar uma transformação profunda em todos os
                aspectos da sua vida.
              </p>
              <p className="w-full indent-6 text-md md:w-[48%] p-6 md:text-xl bg-slate-700 rounded-md">
                Não permita que o estresse, a ansiedade e a agitação dominem sua vida.
                Abra as portas para um estado de calma, equilíbrio e clareza com a
                meditação guiada.
              </p>

            </div>
          </div>

        </div>
        {/* ================================================ */}

        <p className="text-white p-4 md:w-[60%] mt-5 text-md md:text-xl mb-10">
          É importante notar que os efeitos da meditação podem variar de pessoa
          para pessoa, e a prática regular e a orientação adequada podem ser
          importantes para alcançar benefícios significativos. Além disso,
          a pesquisa em neurociência continua a explorar os mecanismos subjacentes
          aos efeitos da meditação para uma compreensão mais profunda de como ela
          afeta a mente e o corpo.
        </p>

      </div>

      <div className="flex flex-col justify-center items-center w-full ">
        <p className=" text-center p-4 text-white text-xl md:w-[50%]">
          Experimente agora e descubra como essa prática simples pode trazer benefícios
          duradouros para você. Comece sua jornada de bem-estar e transformação pessoal
          hoje mesmo.
        </p>
        <Link to='/audio'
          className="p-4 w-fit text-black bg-slate-300 rounded-md text-xl hover:bg-slate-100 transition-all hover:font-bold shadow-md shadow-cyan-700">
          Medite aqui!
        </Link>

      </div>

      <Footer />
    </div>
  )
}

export default Meditacao