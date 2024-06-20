import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className='home'>

      <div className='proposta-img'>
        <img src="http://mynds.com.br/wp-content/uploads/2023/11/Logomyndstransparente-3.png" alt="" />
      </div>

      <div className='proposta'>
        <div className='text'>
          <p href="">Nossa Escola de Tecnologia está ansiosa
            para receber crianças e jovens entusiastas
            que queiram explorar o emocionante
            universo da <span className='StyleVerde' >Programação, Games e da
              Robótica.</span> Se você está pronto para
            investir no futuro do seu filho e oferecer a ele as
            ferramentas para se destacar, junte-se a
            nós na nossa jornada educacional.</p>
        </div>

        <div className='button'>
          <a>Agende sua Aula Experimental</a>
        </div>

      </div>

      <div className="card">

        <div className="card-content-Web">
          <img src="http://mynds.com.br/wp-content/uploads/2023/11/Logotipo-circular-moderno-vintage-iniciais-laranja-e-cinza-30-×-30-cm-1.png" alt="" className="card-image-web" />
          <h2 className="card-title">Programação Web e Mobile</h2>
          <p className="card-description">Dominar a programação é incrivelmente vantajoso, pois aprimora o pensamento lógico e fortalece a habilidade de enfrentar desafios complexos, ao mesmo tempo em que desbloqueia um leque de possibilidades profissionais em um setor que está sempre evoluindo e buscando inovações.</p>
        </div>

        <div className="card-content-game">
          <img src="http://mynds.com.br/wp-content/uploads/2023/11/1.png" alt="" className="card-image-game" />
          <h2 className="card-title">Games</h2>
          <p className="card-description">Dominar a arte de desenvolver games 2D e 3D é essencial numa era em que o entretenimento digital domina a cultura popular. Tal competência não apenas habilita os criadores a materializar suas ideias criativas e contar histórias de maneira interativa, mas também oferece entendimento avançado em diversas áreas técnicas.</p>
        </div>


        <div className="card-content-robotica">
          <img src="http://mynds.com.br/wp-content/uploads/2023/11/2.png" alt="" className="card-image-robotica" />
          <h2 className="card-title">Robótica</h2>
          <p className="card-description">Dominar a robótica é vital, pois ela engloba a integração de campos como mecânica, eletrônica e programação. Esta aprendizagem estimula competências fundamentais,incluindo colaboração e raciocínio analítico, além de preparar os indivíduos para um mercado de trabalho iminente onde a automação tem grande</p>
        </div>
      </div>

      <div className='porque-mynds'>
        <h3 className='porque-subtitle'>Por Que A</h3>
        <h1 className='porque-title'>Mynds?</h1>
        <p> <span className='StyleVerde'>Aprendizado Divertido:</span> Acreditamos que a aprendizagem deve ser divertida e envolvente. Nossas aulas são projetadas para despertar a curiosidade e a imaginação dos alunos, enquanto eles adquirem habilidades valiosas.</p>
        <p> <span className='StyleVerde'>Mãos à Obra:</span> Nada supera a experiência prática. Os alunos terão a oportunidade de criar projetos reais, desde programas de computador até robôs funcionais, permitindo que apliquem o que aprenderam de maneira tangível.</p>
        <p> <span className='StyleVerde'>Preparação para o Futuro:</span> A programação e a robótica são habilidades essenciais no mundo atual. Ao aprenderem desde cedo, os alunos estarão melhor preparados para enfrentar os desafios tecnológicos do amanhã.</p>
        <p> <span className='StyleVerde'>Ambiente de Apoio:</span> Nossa escola oferece um ambiente acolhedor e de apoio, onde os alunos podem aprender sem medo de cometer erros. Celebramos o processo de aprendizagem e o crescimento constante.</p>
      </div>

      <div className='cursos'>
        <p className='cursos-subtitle'>Cursos</p>
        <p className='cursos-title'>Trilha do Conhecimento</p>

        <img src="http://mynds.com.br/wp-content/uploads/2023/11/trilha-transparente.png" alt="" />

        <div className='cursos-button'>
          <a>Conheça nossos cursos</a>
        </div>
      </div>

      <div className='contato'>
        <div className='contato-card'>
          <p className='contato-title'></p>

          <div className='whatsapp'>
            <img src="" alt="" />
            (12) 99193-6532
          </div>

          <div className='local'>
            Av. John Fitzgerald Kenedy, 50 - Jardim das Nações, Taubaté - SP, 12030-200
          </div>

          <div className="email">
            <a> mynds@mynds.com.br </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage