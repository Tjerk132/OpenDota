import { TeamSide } from "../../../../domain/Player/TeamSide";
import { KillsLogProps } from "./KillsLogProps"
import { TeamKills } from "./TeamKills/TeamKills";
import "./KillsLog.scss";

export const KillsLog: React.FC<KillsLogProps> = (props) => {

    const { radiantKills, direKills } = props;

    return <div className="kills-log">
        <div>
            <h4>Radiant kills</h4>
            <TeamKills kills={radiantKills} teamSide={TeamSide.Radiant} />
        </div>
        <div>
            <h4>Dire kills</h4>
            <TeamKills kills={direKills} teamSide={TeamSide.Dire} />
        </div>
    </div>
}