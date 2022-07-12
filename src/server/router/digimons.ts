import { createRouter } from "./context";
//import { z } from "zod";
import type   {Digimons}  from '../../types/types'; 

export const digimonRouter = createRouter().query("getDigimons", {
    async resolve() {
        const data = await fetch("https://digimon-api.vercel.app/api/digimon");
        const digimons: Digimons[] = await data.json();
        const sortDigimons = [...digimons.filter((digimon) => digimon.level === 'Fresh'),
        ...digimons.filter((digimon) => digimon.level === 'In Training'),
        ...digimons.filter((digimon) => digimon.level === 'Rookie'),
        ...digimons.filter((digimon) => digimon.level === 'Champion'),
        ...digimons.filter((digimon) => digimon.level === 'Ultimate'),
        ...digimons.filter((digimon) => digimon.level === 'Mega'),
        ...digimons.filter((digimon) => digimon.level === 'Armor'),
        
    ];
    return {
      digimons: sortDigimons,
    };
  },
});
