import { BuildingStatusProps } from "./BuildingStatusProps";
import { TowerSvg } from "./TowerSvg";

export const BuildingStatus: React.FC<BuildingStatusProps> = () => {
    return (<svg
        style={{
            width: 600,
            height: 200
        }}>
        <image href="/map.jpg" x="0" y="0" width="600" height="200" />
        <TowerSvg />
    </svg>);
}