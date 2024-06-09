import { TeamSide } from "../../../../domain/Player/TeamSide";
import { AncientSvg } from "./Ancient/AncientSvg";
import { BarracksSvg } from "./Barracks/BarracksSvg";
import { BuildingStatusProps } from "./BuildingStatusProps";
import { TowerSvg } from "./Towers/TowerSvg";
import { useBuildingStatus } from "./useBuildingStatus";

export const BuildingStatus: React.FC<BuildingStatusProps> = (props) => {

    const { towerStatusRadiant, towerStatusDire, barracksStatusRadiant, barracksStatusDire, ancientStatusRadiant, ancientStatusDire } = props;

    const {
        radiantTowerStatuses: radiantTowers,
        direTowerStatuses: direTowers,
        radiantBarracksStatuses: radiantBarracks,
        direBarracksStatuses: direBarracks,
        radiantAncientStatus: radiantAncient,
        direAncientStatus: direAncient
    } = useBuildingStatus(towerStatusRadiant, towerStatusDire, barracksStatusRadiant, barracksStatusDire, ancientStatusRadiant, ancientStatusDire);

    return (<svg
        style={{
            width: 360,
            height: 360,
        }}
    >
        <image
            href="/map.jpg"
            x="0"
            y="0"
            width="360"
            height="360"
        />
        <AncientSvg
            svg={{
                x: direAncient.x,
                y: direAncient.y
            }}
            isActive={direAncient.isActive}
            teamSide={TeamSide.Dire}
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
        <AncientSvg
            svg={{
                x: radiantAncient.x,
                y: radiantAncient.y
            }}
            isActive={radiantAncient.isActive}
            teamSide={TeamSide.Radiant}
        />
    </svg>);
}