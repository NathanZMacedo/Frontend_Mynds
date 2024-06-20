import React from 'react'
import './QuemPage.css'

function QuemPage() {
    return (
        <div className='Quem'>
            <div className='QuemSomos'>
                <a className='QuemSomos-title'>Quem somos?</a>
                <p className='description'>A Mynds é uma escola inovadora, dedicada a inspirar e capacitar pessoas, desde a infância, a explorar o emocionante mundo da PROGRAMAÇÃO, dos GAMES e da ROBÓTICA. Na Mynds, oferecemos cursos envolventes e práticos, permitindo que o aprendizado seja de forma divertida e acessível. Nossos programas incentivam a experimentação, a colaboração e a construção de projetos que estimulam a imaginação.</p>
            </div>

            <div className='Cards'>
                <div className='Name'>
                    <img src="http://mynds.com.br/wp-content/uploads/2023/12/Copia-de-Apresentacao-aos-pais-Mynds-1-1.png" alt="" className='img-name'/>
                    <p className='title-name'>Nome</p>
                    <p className='description-name'>A inspiração para o nome Mynds veio de “Minds” (inglês) ou “Mentes” em português. A palavra é originária do Latim, que significa “pensar, conhecer, entender”. Nos remete à aprendizado, e tudo o que nós
                    podemos fazer utilizando nosso poder cognitivo.</p>
                </div>
            </div>
        </div>
    )
}

export default QuemPage