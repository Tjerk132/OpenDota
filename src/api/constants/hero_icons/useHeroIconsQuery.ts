export const useHeroIconsQuery = () => {

    const useHeroIcon = (heroName: string) => {
        
        const heroString = heroName
        .replace("npc_dota_hero_", "")
        .replace("zuus", "zeus");
        
        return `/heroicons/${heroString}.png`;
    }

    return { useHeroIcon  }
}