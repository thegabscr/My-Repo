import styles from './Skills.module.css'
import css from '../../image/skills/css.svg'
import html from '../../image/skills/html.svg'
import javascript from '../../image/skills/javascript.svg'
import mongodb from '../../image/skills/mongodb.svg'
import mysql from '../../image/skills/mysql.svg'
import nodejs from '../../image/skills/nodejs.svg'
import react from '../../image/skills/react.svg'
import sass from '../../image/skills/sass.svg'
import typescript from '../../image/skills/typescript.svg'

function Skills() {
    return (
        <div className={styles.skill} id="Skills" >
            <h1> Habilidades </h1>
            <p> Conheça um pouco das minhas habilidades e conhecimentos </p>
            <div>
                <img src={javascript} />
                <img src={html} />
                <img src={css} />
                <img src={mongodb} />
                <img src={mysql} />
                <img src={nodejs} />
                <img src={react} />
                <img src={sass} />
                <img src={typescript} />
            </div>
            <h2> Em breve mais habilidades... </h2>
        </div>
    )
}

export default Skills