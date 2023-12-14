export type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    };
};

export type StatType = {
    base_stat: number,
    effort: number,
    stat: {
        name: string,
    }
}

export type Pokemon = {
    name: string,
    types: PokemonType[],
    sprites: {
        front_default: string
    },
    stats: StatType[],
    species: {
        name: string,
        url: string
    }
}

export type ColorType = {
    color: {
        name: string
    }
}