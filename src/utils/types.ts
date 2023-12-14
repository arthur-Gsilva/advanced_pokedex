


const effectivenessChart = {
    Normal: { Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 0.5, Bug: 1, Ghost: 0, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 1 },
    Fighting: { Normal: 2, Fighting: 1, Flying: 0.5, Poison: 0.5, Ground: 1, Rock: 2, Bug: 0.5, Ghost: 0, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 0.5, Ice: 2, Dragon: 1, Dark: 2, Steel: 2, Fairy: 0.5 },
    Flying: { Normal: 1, Fighting: 2, Flying: 1, Poison: 1, Ground: 1, Rock: 0.5, Bug: 2, Ghost: 1, Fire: 1, Water: 1, Grass: 2, Electric: 0.5, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 1 },
    Poison: { Normal: 1, Fighting: 1, Flying: 1, Poison: 0.5, Ground: 0.5, Rock: 0.5, Bug: 1, Ghost: 0.5, Fire: 1, Water: 1, Grass: 2, Electric: 1, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Steel: 0, Fairy: 2 },
    Ground: { Normal: 1, Fighting: 1, Flying: 0, Poison: 2, Ground: 1, Rock: 2, Bug: 0.5, Ghost: 1, Fire: 2, Water: 1, Grass: 0.5, Electric: 2, Psychic: 1, Ice: 1, Dragon: 1, Dark: 1, Steel: 2, Fairy: 1 },
    Rock: { Normal: 1, Fighting: 0.5, Flying: 2, Poison: 1, Ground: 2, Rock: 1, Bug: 2, Ghost: 1, Fire: 2, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 2, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 1 },
    Bug: { Normal: 1, Fighting: 0.5, Flying: 0.5, Poison: 0.5, Ground: 1, Rock: 0.5, Bug: 1, Ghost: 0.5, Fire: 0.5, Water: 1, Grass: 2, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 1 },
    Ghost: { Normal: 0, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 2, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 0.5, Steel: 1, Fairy: 1 },
    Fire: { Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 0.5, Bug: 2, Ghost: 1, Fire: 0.5, Water: 0.5, Grass: 2, Electric: 1, Psychic: 1, Ice: 2, Dragon: 0.5, Dark: 1, Steel: 0.5, Fairy: 1 },
    Water: { Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 2, Rock: 2, Bug: 1, Ghost: 1, Fire: 2, Water: 0.5, Grass: 0.5, Electric: 1, Psychic: 1, Ice: 1, Dragon: 0.5, Dark: 1, Steel: 0.5, Fairy: 1 },
    Grass: { Normal: 1, Fighting: 1, Flying: 0.5, Poison: 0.5, Ground: 2, Rock: 2, Bug: 0.5, Ghost: 1, Fire: 0.5, Water: 2, Grass: 0.5, Electric: 1, Psychic: 1, Ice: 1, Dragon: 0.5, Dark: 1, Steel: 0.5, Fairy: 1 },
    Electric: { Normal: 1, Fighting: 1, Flying: 2, Poison: 1, Ground: 0, Rock: 1, Bug: 1, Ghost: 1, Fire: 1, Water: 2, Grass: 0.5, Electric: 0.5, Psychic: 1, Ice: 1, Dragon: 0.5, Dark: 1, Steel: 1, Fairy: 1 },
    Psychic: { Normal: 1, Fighting: 2, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 0.5, Ice: 1, Dragon: 1, Dark: 0, Steel: 0.5, Fairy: 1 },
    Ice: { Normal: 1, Fighting: 1, Flying: 2, Poison: 1, Ground: 2, Rock: 1, Bug: 1, Ghost: 1, Fire: 0.5, Water: 0.5, Grass: 2, Electric: 1, Psychic: 1, Ice: 0.5, Dragon: 2, Dark: 1, Steel: 0.5, Fairy: 1 },
    Dragon: { Normal: 1, Fighting: 1, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 1, Dragon: 2, Dark: 1, Steel: 0.5, Fairy: 0 },
    Dark: { Normal: 1, Fighting: 0.5, Flying: 1, Poison: 1, Ground: 1, Rock: 1, Bug: 1, Ghost: 2, Fire: 1, Water: 1, Grass: 1, Electric: 1, Psychic: 2, Ice: 1, Dragon: 1, Dark: 0.5, Steel: 1, Fairy: 0.5 },
    Steel: { Normal: 1, Fighting: 0.5, Flying: 1, Poison: 1, Ground: 1, Rock: 2, Bug: 1, Ghost: 1, Fire: 0.5, Water: 0.5, Grass: 1, Electric: 0.5, Psychic: 1, Ice: 2, Dragon: 1, Dark: 1, Steel: 0.5, Fairy: 2 },
    Fairy: { Normal: 1, Fighting: 2, Flying: 1, Poison: 0.5, Ground: 1, Rock: 1, Bug: 1, Ghost: 1, Fire: 0.5, Water: 1, Grass: 1, Electric: 1, Psychic: 1, Ice: 2, Dragon: 2, Dark: 2, Steel: 0.5, Fairy: 1 },
}


type FireEffectiveType = {
    type: string;
    values: {
      Normal: number;
      Fighting: number;
      Flying: number;
      Poison: number;
      Ground: number;
      Rock: number;
      Bug: number;
      Ghost: number;
      Fire: number;
      Water: number;
      Grass: number;
      Electric: number;
      Psychic: number;
      Ice: number;
      Dragon: number;
      Dark: number;
      Steel: number;
      Fairy: number;
    };
  }

export function getEffectiveness(pokemonType: string | undefined) {
    let weakness: string[]  = [];
    const resistant: string[] = [];

  
    // Loop por todos os tipos possíveis
    for (const type in effectivenessChart) {
        //@ts-ignore
      const multiplier = effectivenessChart[type][pokemonType];
  
      // Se o multiplicador for 2, é super efetivo
      if (multiplier === 2) {
        weakness.push(type);
      }
  
      // Se o multiplicador for 0.5, não é efetivo
      else if (multiplier === 0.5) {
        resistant.push(type);
      }

    }
  
    return { resistant, weakness};
}

export function getEffectiveTypes(pokemonType: string | undefined): string[] {
    if (!pokemonType) {
        throw new Error("pokemonType is required");
    }
    //@ts-ignore
    const effectiveTypes: string[] = Object.entries(effectivenessChart[pokemonType]).filter(
      ([type, value]) => value === 2
    ).map(([type]) => type);
  
    return effectiveTypes;
}
export function getVulnerableTypes(pokemonType: string | undefined): string[] {
    if (!pokemonType) {
        throw new Error("pokemonType is required");
    }
    //@ts-ignore
    const effectiveTypes: string[] = Object.entries(effectivenessChart[pokemonType]).filter(
      ([type, value]) => value === 0.5
    ).map(([type]) => type);
  
    return effectiveTypes;
}

