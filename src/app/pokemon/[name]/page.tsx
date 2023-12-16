"use client"

import { BoxInfo } from '@/components/BoxInfo'
import styles from './page.module.css'
import { Pokemon } from '@/components/Pokemon'
import { ColorType, Pokemon as PokemonType } from '@/types/Pokemon'
import { useEffect, useState } from 'react'
import { PokeColorProvider, usePokeColor } from '../../../contexts/PokeColor';

type Props = {
    params: {
        name: string
    }
}

const Page = ({ params }: Props) => {

    const [pokeData, setPokeData] = useState<PokemonType | undefined>()
    const { pokeColor, setPokeColor } = usePokeColor();


    const getData = async () => {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
        const data: PokemonType = await request.json()
        setPokeData(data)
    }

    const getColorData = async ()  => {
        if(pokeData){
            const requestColor = await fetch(`${pokeData?.species.url}`)
            const dataColor = await requestColor.json()
            setPokeColor(dataColor.color.name)
            console.log(pokeColor)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(pokeData){
            getColorData()
        }
    }, [pokeData])
    

    return(
        <div className={styles.container}>
            <BoxInfo 
                pokeName
                data={pokeData}
                setData={setPokeData}
            />

            <div className={styles.stats}>
                <div className={styles.statsContent}>

                    {pokeData?.stats.map((data) => (
                        <div className={styles.statsItem} key={data.stat.name}>
                            
                        <p>{data.stat.name}: {data.base_stat}</p>
                            
                            
                        <div className={styles.bar} style={{width: data.base_stat, backgroundColor: pokeColor}}></div>
                    </div>
                    ))}
                </div>
            </div>

            <Pokemon data={pokeData}/>

            
            <BoxInfo 
                pokeName={false}
                data={pokeData}
                setData={setPokeData}
            />
            
            
        </div>
    )
}

export default Page