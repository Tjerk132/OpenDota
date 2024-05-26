import { TeamSideCube } from "../TeamSideCube";
import { BarracksProps } from "./BarracksProps";

export const BarracksSvg: React.FC<BarracksProps> = (props) => {

    return <TeamSideCube
        {...props}
        polygons={[
            //  <!-- Front face -->
            "5,20 15,20 15,15 5,15",
            // <!-- Top face -->
            "5,15 3,10 13,10 15,15",
            // <!-- Side face -->
            "5,15 3,10 3,15 5,20"
        ]}
        lines={[
            // <!-- Left edge -->
            { x1: "3", y1: "10", x2: "3", y2: "15" },
            // <!-- Top edge -->
            { x1: "3", y1: "10", x2: "13", y2: "10" },
            // <!-- Right edge -->
            { x1: "13", y1: "10", x2: "15", y2: "15" }
        ]}
    />
}