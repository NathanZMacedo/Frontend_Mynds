import React from 'react'
import './QuemPage.css'

function QuemPage() {
    return (
        <div className='Quem'>
            <div className='quemsomos-img'>
                <img src="http://mynds.com.br/wp-content/uploads/2023/11/Robo-2.png" alt="" />
            </div>

            <div className='QuemSomos'>
                <a className='QuemSomos-title'>Quem somos?</a>
                <p className='description'>A Mynds é uma escola inovadora, dedicada a inspirar e capacitar pessoas, desde a infância, a explorar o emocionante mundo da PROGRAMAÇÃO, dos GAMES e da ROBÓTICA. Na Mynds, oferecemos cursos envolventes e práticos, permitindo que o aprendizado seja de forma divertida e acessível. Nossos programas incentivam a experimentação, a colaboração e a construção de projetos que estimulam a imaginação.</p>
            </div>

            <div className='Cards'>
                <div className='Name'>
                    <p className='title-name'>Nome</p>
                    <p className='description-name'>A inspiração para o nome Mynds veio de “Minds” (inglês) ou “Mentes” em português. A palavra é originária do Latim, que significa “pensar, conhecer, entender”. Nos remete à aprendizado, e tudo o que nós
                        podemos fazer utilizando nosso poder cognitivo.</p>
                </div>

                <div className='imglogo'>
                <div className='Logo'>
                    <p className='title-logo'>Logotipo</p>
                    <p className='description-logo'>O logotipo da marca representa a juventude em seus melhores aspectos, o robô demonstra a multifuncionalidade e a destreza que a vontade de aprender nos traz, suas cores remetem tranquilidade, conforto e qualidade.</p>
                </div>
                </div>

            </div>
        </div>
    )
}

export default QuemPage