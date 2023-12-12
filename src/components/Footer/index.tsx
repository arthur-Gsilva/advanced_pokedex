import styles from './styles.module.css'

import { AiOutlinePoweroff } from "react-icons/ai";

export const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.empty}>
                    <div></div>
                </div>
                <div className={styles.lineLeft}></div>

                <nav className={styles.nav}>
                    <div>
                        <a href="#">Description</a>
                    </div>
                    
                    <div>
                        <a href="#">Evolution</a>
                    </div>
                    
                    <div>
                        <a href="#">Catching</a>
                    </div>
                    
                    <div>
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