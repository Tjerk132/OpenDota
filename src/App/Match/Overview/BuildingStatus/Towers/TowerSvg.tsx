import { TeamSideCube } from "../TeamSideCube";
import { TowerProps } from "./TowerProps"

export const TowerSvg: React.FC<TowerProps> = (props) => {

    return <TeamSideCube
        {...props}
        polygons={[
            //  <!-- Front face -->
            "5,5 15,6 15,20 5,20",
            // <!-- Top face -->
            "5,6 3,2 13,2 15,6",
            // <!-- Side face -->
            "5,6 3,2 3,15 5,20"
        ]}
        lines={[
            // <!-- Left edge -->
            { x1: "3", y1: "2", x2: "3", y2: "15" },
            // <!-- Top edge -->
            { x1: "3", y1: "2", x2: "13", y2: "2" },
            // <!-- Right edge -->
            { x1: "13", y1: "2", x2: "15", y2: "6" }
        ]}
    />
}