import { useMatchesQuery } from "../../api/matches/useMatchesQuery";
import { Player } from "../../api/matches/DTO/Match";
import { MatchOverviewHeaderProps } from "../../App/Match/Overview/Header/MatchOverviewHeaderProps";
import { PlayerProps } from "../../domain/Player/PlayerProps";
import { MatchResultProps } from "../../App/Match/Overview/Result/MatchResultProps";
import { TeamSide } from "../../domain/Player/TeamSide";
import { useState } from "react";
import { PlayersTableProps } from "../../App/Match/Overview/Players/PlayersTableProps";
import { PicksAndBansProps } from "../../App/Match/Overview/PicksAndBans/PicksAndBansProps";
import { TeamAdvantagesProps } from "../../App/Match/Overview/TeamAdvantages/TeamAdvantagesProps";
import { BuildingStatusProps } from "../../App/Match/Overview/BuildingStatus/BuildingStatusProps";
import { KillsLogProps } from "../../App/Match/Overview/KillsLog/KillsLogProps";
import { useHeroesQuery } from "../../api/constants/heroes/useHeroesQuery";
import { useXpLevelQuery } from "../../api/constants/xp_level/useXpLevelQuery";
import { Hero } from "../../api/constants/heroes/DTO/Heroes";
import { useBountyCalculator } from "../../hooks/calculators/useBountyCalculator";
import { AbilityUpgradesProps } from "../../App/Match/Overview/AbilityUpgrades/AbilityUpgradesProps";

export const useMatchOverviewPage = (matchId: number) => {
    const { useMatch } = useMatchesQuery();

    const { data: match, isLoading } = useMatch(matchId);

    const { useHeroesByTeam } = useHeroesQuery();
    const { playerLevelByMinute } = useXpLevelQuery();

    const { calculateKillBounty } = useBountyCalculator();

    const [tabIndex, setTabIndex] = useState(0);

    const matchOverviewHeader: MatchOverviewHeaderProps = {
        matchId: match.match_id,
        lobbyTypeId: match.lobby_type,
        gameModeId: match.game_mode,
        regionId: match.region,
        startTime: match.start_time,
        duration: match.duration
    };

    const matchResult: MatchResultProps = {
        radiantWin: match.radiant_win,
        radiantScore: match.radiant_score,
        direScore: match.dire_score,
        matchDuration: match.duration / 60 //sec to min
    };

    const radiantPlayers = match.players?.filter(player => player.isRadiant) ?? [];
    const direPlayers = match.players?.filter(player => !player.isRadiant) ?? [];

    const radiantHeroes = useHeroesByTeam(radiantPlayers.map(player => player.hero_id))
    const direHeroes = useHeroesByTeam(direPlayers.map(player => player.hero_id))

    const mapPlayerToProps = (player: Player, index: number) => {
        // var playerSlot = player.player_slot;
        // var teamMask = 0b10000000;
        // var team = playerSlot & 0b10000000 >> 7;
        // //; >> 7 << 7 >> 7;
        // var positionMask = 7;//0b00000111;
        // var position = playerSlot & positionMask;

        // Extract team (first bit)
        // const team: boolean = !!(player.player_slot & 0b10000000); // True for Dire, False for Radiant

        // Extract player position (last three bits)
        const position: number = player.player_slot & 0b00000111; // Mask to keep only the last 3 bits

        //: 0 - full support 1 - support 2 - hard 3 - mid 4 - safe
        const items = [player.item_0, player.item_1, player.item_2, player.item_3, player.item_4, player.item_5];
        const backpack = [player.backpack_0, player.backpack_1, player.backpack_2];

        return {
            id: index,
            teamSide: player.isRadiant ? TeamSide.Radiant : TeamSide.Dire,
            heroId: player.hero_id,
            level: player.level,
            role: player.lane_role, //get by team_slot,player_slot?
            isRoaming: player.is_roaming,
            lane: player.lane,
            player: player.personaname,
            kills: player.kills,
            deaths: player.deaths,
            assists: player.assists,
            networth: player.net_worth,
            lasthits: player.last_hits,
            denies: player.denies,
            gpm: player.gold_per_min,
            xppm: player.xp_per_min,
            heroDamage: player.hero_damage,
            heroHealing: player.hero_healing,
            buildingDamage: player.tower_damage,
            observersPlaced: player.purchase_ward_observer,
            sentriesPlaced: player.purchase_ward_sentry,
            items: items.map((itemId) => ({
                time: 0,
                itemId: itemId
            })),
            neutralItemId: player.item_neutral,
            backpack: backpack.map((itemId) => ({
                time: 0,
                itemId: itemId
            })),
            buffs: {
                aghanimsShard: player.aghanims_shard === 1,
                aghanimsBlessing: player.aghanims_scepter === 1,
                moonShard: player.moonshard === 1
            }
        } as PlayerProps;
    };

    const playersTable = {
        selectedTab: tabIndex,
        setTab: (index: number) => setTabIndex(index)
    } as Partial<PlayersTableProps>;

    const radiantPlayersTable = {
        ...playersTable,
        players: radiantPlayers.map(mapPlayerToProps)
    } as PlayersTableProps;

    const direPlayersTable = {
        ...playersTable,
        players: direPlayers.map(mapPlayerToProps)
    } as PlayersTableProps;

    const picksAndBans: PicksAndBansProps = {
        picksAndBans: match.picks_bans?.map(pick_ban => ({
            isPick: pick_ban.is_pick,
            teamSide: pick_ban.team === 0 ? TeamSide.Radiant : TeamSide.Dire,
            heroId: pick_ban.hero_id,
            order: pick_ban.order
        }))
    };

    const teamAdvantages: TeamAdvantagesProps = {
        radiantGoldAdvantage: match.radiant_gold_adv,
        radiantXpAdvantage: match.radiant_xp_adv
    };

    const buildingStatus: BuildingStatusProps = {
        towerStatusRadiant: match.tower_status_radiant,
        towerStatusDire: match.tower_status_dire,
        barracksStatusRadiant: match.barracks_status_radiant,
        barracksStatusDire: match.barracks_status_dire,
        ancientStatusRadiant: match.radiant_win ? 1 : 0,
        ancientStatusDire: match.radiant_win ? 0 : 1
    }
    
    //if first blood, (extra 150 gold) 135?
    const mapPlayerKillsForHero = (player: Player, playerHero: Hero, killedHero: Hero, opposingPlayers: Player[]) => {

        const opposingPlayer = opposingPlayers.find(player => player.hero_id === killedHero.id)!;

        const playerKilledHeroKillLogs = player.kills_log
            .filter(killLog => killLog.key === killedHero.name);

        const gainedGold = playerKilledHeroKillLogs.map(heroKilledLog => {
            
            //who of enemy team killed the current player hero
            const playerKilledKillLogs = opposingPlayers
                .map(player => player.kills_log)
                .flatMap(killsLog => killsLog)
                .filter(killLog => killLog.key === playerHero.name);

            // most recent death of current player hero before time of current kill
            const mostRecentDeathTime = playerKilledKillLogs.filter(killLog => 
                    killLog.time < heroKilledLog.time
            ).max(killLog => killLog.time);

            const playerKillsBeforeKill = player.kills_log.filter(log =>
                log.time <= heroKilledLog.time &&
                log.time > mostRecentDeathTime //default 0
            ).length;

            const minute = heroKilledLog.time < 60 ? 0 : heroKilledLog.time % 60;

            const killedPlayerLevel = playerLevelByMinute(opposingPlayer, minute);

            const bounty = calculateKillBounty(killedPlayerLevel, playerKillsBeforeKill);

            // if (playerHero.name.includes('clinkz') && killedHero.name.includes("zuus")) {
            //     console.log('clinkz got bounty of ', bounty, ' for killing ', heroKilledLog.key, ' at level ', killedPlayerLevel, ' with streak ', playerKillsBeforeKill);
            // }

            return bounty;

        }).sum(bounty => bounty);

        return {
            heroName: killedHero.name,
            amount: playerKilledHeroKillLogs.length,
            gainedGold: gainedGold
        }
    }

    const killsLog: KillsLogProps = {
        radiantKills: radiantPlayers.map(player => ({
            heroId: player.hero_id,
            kills: direHeroes.map(direHero => {
                const playerHero = radiantHeroes.find(hero => hero.id === player.hero_id)!;
                return mapPlayerKillsForHero(player, playerHero, direHero, direPlayers);
            })
        })),
        direKills: direPlayers.map(player => ({
            heroId: player.hero_id,
            kills: radiantHeroes.map(radiantHero => {
                const playerHero = direHeroes.find(hero => hero.id === player.hero_id)!;
                return mapPlayerKillsForHero(player, playerHero, radiantHero, radiantPlayers);
            })
        }))
    }

    const abilityUpgrades = {
        abilityUpgradesRadiant: radiantPlayers.map(player => ({
            heroId: player.hero_id,
            abilityUpgrades: player.ability_upgrades_arr
        })),
        abilityUpgradesDire: direPlayers.map(player => ({
            heroId: player.hero_id,
            abilityUpgrades: player.ability_upgrades_arr
        })) 
    } as AbilityUpgradesProps;

    return { 
        matchOverviewHeader, 
        matchResult, 
        radiantPlayersTable, 
        direPlayersTable, 
        picksAndBans, 
        teamAdvantages, 
        buildingStatus, 
        killsLog,
        abilityUpgrades,
        isLoading 
    }
}