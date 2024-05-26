import { TeamSide } from "../../../../domain/Player/TeamSide";
import { BarracksSvg } from "./Barracks/BarracksSvg";
import { BuildingStatusProps } from "./BuildingStatusProps";
import { TowerSvg } from "./Towers/TowerSvg";
import { useBuildingStatus } from "./useBuildingStatus";

export const BuildingStatus: React.FC<BuildingStatusProps> = (props) => {

    const { towerStatusRadiant, towerStatusDire, barracksStatusRadiant, barracksStatusDire } = props;

    const {
        radiantTowerStatuses: radiantTowers,
        direTowerStatuses: direTowers,
        radiantBarracksStatuses: radiantBarracks,
        direBarracksStatuses: direBarracks
    } = useBuildingStatus(towerStatusRadiant, towerStatusDire, barracksStatusRadiant, barracksStatusDire);

    return (<svg
        style={{
            width: 500,
            height: 500,
        }}
    >
        <image
            href="/map.jpg"
            x="0"
            y="0"
            width="500"
            height="500"
        />
        {direBarracks.map((barracksStatus, index) => (
            <BarracksSvg key={index} svg={{
                x: barracksStatus.x,
                y: barracksStatus.y,
            }}
                teamSide={TeamSide.Dire}
                isActive={barracksStatus.isActive}
            />
        ))}
        {direTowers.map((towerStatus, index) => (
            <TowerSvg key={index} svg={{
                x: towerStatus.x,
                y: towerStatus.y,
            }}
                teamSide={TeamSide.Dire}
                isActive={towerStatus.isActive}
            />
        ))}
        {radiantTowers.map((towerStatus, index) => (
            <TowerSvg key={index} svg={{
                x: towerStatus.x,
                y: towerStatus.y,
            }}
                teamSide={TeamSide.Radiant}
                isActive={towerStatus.isActive}
            />
        ))}
        {radiantBarracks.map((barracksStatus, index) => (
            <BarracksSvg key={index} svg={{
                x: barracksStatus.x,
                y: barracksStatus.y,
            }}
                teamSide={TeamSide.Radiant}
                isActive={barracksStatus.isActive}
            />
        ))}
    </svg>);
}