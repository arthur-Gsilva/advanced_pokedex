import styles from './styles.module.css'

type Props = {
    pokeName: boolean
}

export const BoxInfo = ({ pokeName }: Props) => {
    return(
        <div className={styles.container} style={{color: "#fff"}}>
            <div className={styles.lines}>
                <div className={styles.lineGreen}></div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.content}>
                {pokeName &&
                    <>
                        <h2>Bulbasaur</h2>
                        <div className={styles.pokeInfo}>
                            <div>TYPE: GRASS - POISON</div>
                            <div>EVOLUTION: 1</div>
                        </div>
                    </>
                }
            </div>

            <button className={styles.button}>
                SEE NEXT POKEMON
            </button>
        </div>
    )
}