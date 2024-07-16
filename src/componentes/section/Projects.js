import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import portifolio from '../../image/projects/portifolio.svg'
import bootcamp from '../../image/projects/bootcamp.svg'
import ccxp from '../../image/projects/ccxp.svg'
import countdown from '../../image/projects/countdown.svg'
import countries from '../../image/projects/countries.svg'
import lampada from '../../image/projects/lampada.svg'
import localizacao from '../../image/projects/localizacao.svg'
import produto from '../../image/projects/produto.svg'
import tabuada from '../../image/projects/tabuada.svg'


function Projects() {
    return (
        <div className={styles.projects} id="Projects" >
            <h1> Projetos </h1>
            <Card className="card"
                img={lpdnc}
                title="Landing Page DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
                repo="https://github.com/thegabscr/Projeto-LP/tree/main"
                site="https://meuprojeto1-dnc.netlify.app/" />
            <Card
                img={portifolio}
                title="Meu portifólio"
                tech="React"
                description="Portifólio criado em React+Bootstrap"
                repo="https://github.com/thegabscr/portifolio-gcr"
                site="..." />
            <Card
                img={bootcamp}
                title="Bootcamp - DNC"
                tech="HTML, CSS"
                description="Desenvolvimento de uma Landing Page bootcamp da Escola DNC"
                repo="https://github.com/thegabscr/bootcamp-dnc"
                site="https://bootcamplp-dnc.netlify.app/" />
            <Card
                img={ccxp}
                title="CCXP - DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page CCXP DNC"
                repo="https://github.com/thegabscr/LP-DNC-CCXP"
                site="https://lp-dnc-ccxp.vercel.app/" />
            <Card
                img={countdown}
                title="Contagem regressiva"
                tech="HTML, CSS, JS e API"
                description="Desenvolvimento de uma Landing Page contagem regressiva"
                repo="https://github.com/thegabscr/Estudos-JS/tree/master/9_Countdown"
                site="https://countdown1-dnc.netlify.app/" />
            <Card
                img={countries}
                title="Pesquisador de países"
                tech="HTML, CSS, JS e API"
                description="Desenvolvimento de uma Landing Page pesquisa de países"
                repo="https://github.com/thegabscr/Estudos-JS/tree/master/14_ProjetoPa%C3%ADs"
                site="https://rest-countries-dnc.netlify.app/" />
            <Card
                img={lampada}
                title="Lampada"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page interações com lampada"
                repo="https://github.com/thegabscr/Estudos-JS/tree/master/8_Lampada"
                site="https://lamp-dnc.netlify.app/" />
            <Card
                img={localizacao}
                title="Pesquisa de localização"
                tech="HTML, CSS, JS e API"
                description="Desenvolvimento de uma Landing Page pesquisa de localizações"
                repo="https://github.com/thegabscr/dnc-api"
                site="https://dnc-api-five.vercel.app/" />
            <Card
                img={produto}
                title="Controle de produtos"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page de controle de produtos"
                repo="https://github.com/thegabscr/Estudos-JS/tree/master/12_Produto"
                site="https://produtos-dnc.netlify.app/" />
            <Card
                img={tabuada}
                title="Tabuada"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page de tabuada"
                repo="https://github.com/thegabscr/Estudos-JS/tree/master/7_DesafioTabuada"
                site="https://tabuada1-dnc.netlify.app/" />

            <ButtonB text='Acesse meu repositório' link="https://github.com/thegabscr?tab=repositories" />
        </div>
    )
}

export default Projects