export const useBountyCalculator = () => {

    const streakBonus = (killStreak: number) => killStreak <= 2 ? 0 : 5 * killStreak * killStreak + 5 * killStreak;

    //receive 1 gold every 0.67sec (90 every minute) https://dota2.fandom.com/wiki/Gold
    //15, rest 45, 20, rest 80
    const killBounty = (killedHeroLevel: number, killStreak: number) => 125 + (killedHeroLevel * 8) + streakBonus(killStreak);
    //missing gold from assists
    const calculateKillBounty = (killedPlayerLevel: number, killingPlayerKillStreak: number) => killBounty(killedPlayerLevel, killingPlayerKillStreak);

    return { calculateKillBounty }
}