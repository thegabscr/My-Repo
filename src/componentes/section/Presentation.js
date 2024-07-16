import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Gabriel Cursino! :)          ', 'Desenvolvedor Fullstack          ',];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeliting] = useState(false);
    const period = 60
    const [delta, setDelta] = useState(100)



    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeliting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeliting(false);
            setDelta(period);
            setLoop(loop + 1)
        }
    }

    return (
        <div className={styles.presentation} id="Presentation" >
            <h4><strong> Bem-vindo ao meu portifólio </strong></h4>
            <h1> Olá, eu sou {text} </h1>
            <p> Sou apaixonado por tecnologia, criações e fazer acontecer.
                Estou me formando pela escola DNC no curso de <strong>Progamação Fullstack</strong>. <br />
                Eu adoro desafios profissionais, resolver problemas e sou
                incessante na busca dos meus sonhos. <br />
                Fique á vontade e confira minhas habilidades e meus projetos.
            </p>
            <ButtonA link='https://github.com/thegabscr/' text='Conecte-se comigo!' />
        </div>
    )
}

export default Presentation