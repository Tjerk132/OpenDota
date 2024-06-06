import { LaneType } from "../domain/Game/LaneType";

export const useLane = () => {
    const laneLabel = (lane: LaneType) => {
        switch (lane) {
            case LaneType.Safe:
                return "Safe";
            case LaneType.Middle:
                return "Mid";
            case LaneType.Off:
                return "Off";
        }
    }

    return { laneLabel }
}