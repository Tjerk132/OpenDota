import { TeamSide } from "../../../../domain/Player/TeamSide";
import { KillsLogProps } from "./KillsLogProps"
import { TeamKills } from "./TeamKills/TeamKills";

export const KillsLog: React.FC<KillsLogProps> = (props) => {
    
    const { radiantKills, direKills } = props;

    return <>
        <h4>Radiant kills</h4>
        <TeamKills kills={radiantKills} teamSide={TeamSide.Radiant} />
        <h4>Dire kills</h4>
        <TeamKills kills={direKills} teamSide={TeamSide.Dire} />
    </>
}