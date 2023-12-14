

import { useState, useEffect } from 'react'
import { Pokemon, PokemonType } from '@/types/Pokemon'
import styles from './styles.module.css'
import { getEffectiveTypes, getEffectiveness, getVulnerableTypes } from '@/utils/types'

type Props = {
    pokeName: boolean,
    data: Pokemon | undefined,
    pokeColor: string | undefined
}

export const BoxInfo = ({ pokeName, data, pokeColor }: Props) => {

    const [pokemonTypeName, setPokemonTypeName] = useState<string | undefined>('');
    const [hovered, setHovered] = useState(false);
    

    useEffect(() => {
        if (data && data.types && data.types.length > 0 && data.types[0].type && data.types[0].type.name) {
            const typeName = data.types[0].type.name
            setPokemonTypeName(typeName[0].toUpperCase() + typeName.substring(1))
        }
    }, [data]);;

    const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };


    return(
        <div className={styles.container} style={{
            position: !pokeName ? 'absolute' : 'relative',
            right: !pokeName ? '10px' : '0',
            marginTop: !pokeName ? '50px' : '20px',
            
        }}>
            <div className={styles.lines}>
                <div className={styles.lineColor} style={{backgroundColor: pokeColor}}></div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.content}>
                {pokeName &&
                    <>
                        <h2>{data?.name}</h2>
                        <div className={styles.pokeInfo}>
                            <div>
                                TYPE: {data?.types[0].type.name}
                                {data?.types[1] &&
                                    <>
                                        - {data?.types[1].type.name}
                                    </>
                                }
                            </div>
                            <div>EVOLUTION: 1</div>
                        </div>
                    </>
                }

                {!pokeName &&
                    <div className={styles.pokeStatBattle}>
                        <div className={styles.pokeStatItem}>
                            <span>Strengths: </span>
                            
                            {pokemonTypeName &&
                                <>
                                    {getEffectiveTypes(pokemonTypeName).map((item) => (
                                        <div key={item}>
                                            <span>{item}</span>
                                        </div>
                                        
                                    ))}
                                </>
                            }
                            
                        </div>
                        <div className={styles.pokeStatItem}>
                            <span>Weakness: </span>
                            
                            {pokemonTypeName &&
                                <>
                                    {getVulnerableTypes(pokemonTypeName).map((item) => (
                                        <div key={item}>
                                            <span>{item}</span>
                                        </div>
                                        
                                    ))}
                                </>
                            }
                        </div>
                        <div className={styles.pokeStatItem}>
                            <span>Resistant: </span>
                            {getEffectiveness(pokemonTypeName).resistant.map((item) => (
                                <div key={item}>
                                    <span>{item}</span>
                                </div>
                                
                            ))}
                        </div>
                        <div className={styles.pokeStatItem}>
                            <span>Vulnerable: </span>
                            {getEffectiveness(pokemonTypeName).weakness.map((item) => (
                                <div key={item}>
                                    <span>{item}</span>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                }
            </div>

            <button 
                className={styles.button} 
                style={{borderColor: pokeColor, backgroundColor: hovered ? pokeColor : 'transparent'}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {pokeName &&
                    <>
                        SEE NEXT POKEMON
                    </>
                }
                {!pokeName &&
                    <>
                        ADD POKEMON
                    </>
                }
                
            </button>
        </div>
    )
}