"use client"

import styles from './styles.module.css'

import pokeballIcon from '../../assets/images/pokeball-icon.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { usePokeColor } from '@/contexts/PokeColor';

export const Header = () => {

    const pokeColor = usePokeColor()

    const customStyles = {
        '--color-hover': pokeColor,
    } as React.CSSProperties;

    return(
        <header className={styles.container}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <img src={pokeballIcon.src} alt="icone de pokébola" />
                </div>
                <div className={styles.lineLeft}></div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li style={customStyles}>Search</li>
                        <li style={customStyles}>Compare</li>
                        <li style={customStyles}>Pokémon</li>
                        <li style={customStyles}>My list</li>
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