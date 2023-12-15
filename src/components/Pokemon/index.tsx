import styles from './styles.module.css'

import { SiCircle } from "react-icons/si";
import { Pokemon as PokemonType } from '@/types/Pokemon';
import { usePokeColor } from '../../contexts/PokeColor';

type Props = {
    data: PokemonType | undefined,
}

export const Pokemon = ({data}: Props) => {
    const { pokeColor } = usePokeColor();

    return(
        <div className={styles.container}>
            <div style={{color: pokeColor}}>
                <SiCircle />
                <img src={data?.sprites.front_default} alt={data?.name} />
            </div>
        </div>
    )
}