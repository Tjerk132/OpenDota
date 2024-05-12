import { useMatchesQuery } from "../../api/matches/useMatchesQuery";
import { Player } from "../../api/matches/DTO/Match";
import { MatchOverviewHeaderProps } from "../../App/Match/Overview/Header/MatchOverviewHeaderProps";
import { PlayerProps } from "../../domain/Player/PlayerProps";
import { MatchResultProps } from "../../App/Match/Overview/Result/MatchResultProps";

export const useMatchOverviewPage = (matchId: number) => {
    const { useMatch } = useMatchesQuery();

    const { data: match, isLoading } = useMatch(matchId);

    const matchOverviewHeader: MatchOverviewHeaderProps = {
        matchId: match.match_id,
        lobbyType: match.lobby_type,
        gameMode: match.game_mode,
        region: match.region,
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

        //should be 0-4
        // 10000000
        // 010011/ true/false, if 1 false0 else true
        // 100
        //radiant
        // console.log("Team:", team ? "Dire" : "Radiant");
        //: 0 - full support 1 - support 2 - hard 3 - mid 4 - safe
        const items = [player.item_0, player.item_1, player.item_2, player.item_3, player.item_4, player.item_5];
        const backpack = [player.backpack_0, player.backpack_1, player.backpack_2];

        return {
            id: index,
            heroId: player.hero_id,
            level: player.level,
            // 'heroId' + player.hero_id + "-lv" + player.level,
            role: 'Role', //get by team_slot,player_slot?
            lane: position.toString(),//"Lane",
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

    const radiantPlayerRows = radiantPlayers.map(mapPlayerToProps);

    const direPlayerRows = direPlayers.map(mapPlayerToProps);

    return { matchOverviewHeader, matchResult, radiantPlayerRows, direPlayerRows, isLoading }
}