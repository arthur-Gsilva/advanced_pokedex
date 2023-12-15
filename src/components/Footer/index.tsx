"use client"

import { usePokeColor } from '@/contexts/PokeColor';
import styles from './styles.module.css'

import { AiOutlinePoweroff } from "react-icons/ai";

export const Footer = () => {

    const { pokeColor } = usePokeColor();

    const customStyles = {
        '--color-hover': pokeColor,
    } as React.CSSProperties;

    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.empty}>
                    <div></div>
                </div>
                <div className={styles.lineLeft}></div>

                <nav className={styles.nav}>
                    <div style={customStyles}>
                        <a href="#">Description</a>
                    </div>
                    
                    <div style={customStyles}>
                        <a href="#">Evolution</a>
                    </div>
                    
                    <div style={customStyles}>
                        <a href="#">Catching</a>
                    </div>
                    
                    <div
                        style={customStyles}
                    >
                        <a href="#">Capable Moves</a>
                    </div>
                    
                </nav>

                <div className={styles.lineRight}></div>
                <div className={styles.logout}>
                    <AiOutlinePoweroff />
                </div>
            </div>
        </footer>
    )
}