import { TeamSide } from "../../../../domain/Player/TeamSide";
import { useBarrackLocations } from "./Barracks/useBarracksLocations";
import { useBarracksStatus } from "./Barracks/useBarracksStatus";
import { BarracksType } from "./BarracksType";
import { Lane } from "./Lane";
import { TowerPosition } from "./TowerPosition";
import { useTowerLocations } from "./Towers/useTowerLocations";
import { useTowerStatus } from "./Towers/useTowerStatus";

export const useBuildingStatus = (
    towerStatusRadiant: number,
    towerStatusDire: number,
    barracksStatusRadiant: number,
    barracksStatusDire: number
) => {

    const { getActiveTowers } = useTowerStatus();
    const { getActiveBarracks } = useBarracksStatus();

    const { getByTeamSide: getTowerLocationsByTeamSide } = useTowerLocations();
    const { getByTeamSide: getBarracksLocationsByTeamSide } = useBarrackLocations();

    const activeTowersRadiant = getActiveTowers(towerStatusRadiant);
    const activeTowersDire = getActiveTowers(towerStatusDire);

    const activeBarracksRadiant = getActiveBarracks(barracksStatusRadiant);
    const activeBarracksDire = getActiveBarracks(barracksStatusDire);

    const mapTowerPositionToProps = (teamSide: TeamSide, activeTowers: {
        lane: Lane;
        position: TowerPosition;
    }[]) => {
        const towerPositions = getTowerLocationsByTeamSide(teamSide);

        return towerPositions.map((([lane, towerLocations]) => {

            return towerLocations.map((towerLocation => {

                const activeTower = activeTowers.find(activeTower =>
                    activeTower.lane === lane &&
                    activeTower.position === towerLocation.position
                );

                return {
                    isActive: activeTower !== undefined,
                    lane,
                    ...towerLocation
                }
            }));
        })).flatMap(towersPositionsByLane => towersPositionsByLane);
    }

    const mapBarracksPositionToProps = (teamSide: TeamSide, activeBarracks: {
        lane: Lane;
        barracksType: BarracksType;
    }[]) => {
        const barracksPositions = getBarracksLocationsByTeamSide(teamSide);

        return barracksPositions.map(([lane, barracksLocations]) => {

            return barracksLocations.map(barracksLocation => {
                const activeBarrack = activeBarracks.find(activeBarrack =>
                    activeBarrack.lane === lane &&
                    activeBarrack.barracksType === barracksLocation.type
                );

                return {
                    isActive: activeBarrack !== undefined,
                    lane,
                    ...barracksLocation
                }
            })
        }).flatMap(barracksPositionsByLane => barracksPositionsByLane);
    }

    return {
        radiantTowerStatuses: mapTowerPositionToProps(TeamSide.Radiant, activeTowersRadiant),
        direTowerStatuses: mapTowerPositionToProps(TeamSide.Dire, activeTowersDire),
        radiantBarracksStatuses: mapBarracksPositionToProps(TeamSide.Radiant, activeBarracksRadiant),
        direBarracksStatuses: mapBarracksPositionToProps(TeamSide.Dire, activeBarracksDire),
    }
}