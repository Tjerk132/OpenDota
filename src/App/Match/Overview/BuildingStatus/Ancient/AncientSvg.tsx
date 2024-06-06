import { TeamSideCube } from "../TeamSideCube"
import { AncientProps } from "./AncientProps"

export const AncientSvg: React.FC<AncientProps> = (props) => {

    return <TeamSideCube
        {...props}
        polygons={[
            // <!-- Front face -->
            { points: "3,10 22,10 22,16 3,16" },
            // <!-- Top face -->
            { points: "3,10 0,2 19,2 22,10" },
            //  <!-- Left side face -->
            { points: "3,10 0,2 0,10 3,16" }
        ]}
        lines={[
            // <!-- Left edge -->
            { x1: "0", y1: "2", x2: "0", y2: "10" },
            // <!-- Top edge -->
            { x1: "0", y1: "2", x2: "19", y2: "2" },
            // <!-- Right edge -->
            { x1: "19", y1: "2", x2: "22", y2: "10" }
        ]}>
    </TeamSideCube>
}