import { TeamSide } from "../../../../domain/Player/TeamSide";
import { BuildingStatusProps } from "./BuildingStatusProps";
import { TowerSvg } from "./TowerSvg";
import { useBuildingStatus } from "./useBuildingStatus";

export const BuildingStatus: React.FC<BuildingStatusProps> = (props) => {

    const { towerStatusRadiant, towerStatusDire, barracksStatusRadiant, barracksStatusDire } = props;
    //determine color based  on retrieved status

    const { towers } = useBuildingStatus(props);

    const radiantTowers = Object.values(towers[TeamSide.Radiant]).flatMap(towersPositionsByLane => towersPositionsByLane);
    const direTowers = Object.values(towers[TeamSide.Dire]).flatMap(towersPositionsByLane => towersPositionsByLane);

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
        {radiantTowers.map((position, index) => (
            <TowerSvg key={index} svg={{
                x: position.x,
                y: position.y,
            }}
                teamSide={TeamSide.Radiant}
            />
        ))}
        {direTowers.map((position, index) => (
            <TowerSvg key={index} svg={{
                x: position.x,
                y: position.y,
            }}
                teamSide={TeamSide.Dire}
            />
        ))}
    </svg>);
}