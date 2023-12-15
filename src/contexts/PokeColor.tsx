"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';

type PokeColorContextData = {
  pokeColor: string;
  setPokeColor: React.Dispatch<React.SetStateAction<string>>;
};

const PokeColorContext = createContext<PokeColorContextData | undefined>(undefined);


export const usePokeColor = () => {
  const context = useContext(PokeColorContext);
  if (!context) {
    throw new Error('usePokeColor must be used within a PokeColorProvider');
  }
  return context;
};


export const PokeColorProvider = ({ children }: {children: ReactNode}) => {
  const [pokeColor, setPokeColor] = useState<string>('');

  const value: PokeColorContextData = {
    pokeColor,
    setPokeColor,
  };

  return (
    <PokeColorContext.Provider value={value}>
      {children}
    </PokeColorContext.Provider>
  );
};