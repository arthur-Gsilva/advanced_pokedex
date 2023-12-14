import styles from './styles.module.css'

import { SiCircle } from "react-icons/si";
import bulba from '../../assets/images/balbasaur.png'
import { Pokemon as PokemonType } from '@/types/Pokemon';

type Props = {
    data: PokemonType | undefined,
    pokeColor: string | undefined
}

export const Pokemon = ({data, pokeColor}: Props) => {
    return(
        <div className={styles.container}>
            <div style={{color: pokeColor}}>
                <SiCircle />
                <img src={data?.sprites.front_default} alt={data?.name} />
            </div>
        </div>
    )
}