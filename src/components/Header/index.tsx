import styles from './styles.module.css'

import pokeballIcon from '../../assets/images/pokeball-icon.png'
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    return(
        <header className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <img src={pokeballIcon.src} alt="icone de pokébola" />
                </div>
                <div className={styles.lineLeft}></div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>Search</li>
                        <li>Compare</li>
                        <li>Pokémon</li>
                        <li>My list</li>
                    </ul>
                </nav>

                <div className={styles.lineRight}></div>
                <div className={styles.hamburguer}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </header>
    )
}