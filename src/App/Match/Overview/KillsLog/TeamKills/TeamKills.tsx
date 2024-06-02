import { TeamKillsProps } from "./TeamKillsProps"
import { PlayerKills } from "./PlayerKills/PlayerKills";
import "./TeamKills.scss";

export const TeamKills: React.FC<TeamKillsProps> = (props) => {
    const { teamSide, kills } = props;

    return <>
        {kills.map((playerKills, index) => {
            return <div key={index} className={`team-kills team-kills--${teamSide}`}>
                <PlayerKills heroId={playerKills.heroId} playerKillsHeroes={playerKills.kills} />
            </div>
        })}
    </>
}