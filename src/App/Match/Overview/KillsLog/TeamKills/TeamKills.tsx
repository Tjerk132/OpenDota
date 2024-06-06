import { TeamKillsProps } from "./TeamKillsProps"
import { PlayerKills } from "./PlayerKills/PlayerKills";
import "./TeamKills.scss";

export const TeamKills: React.FC<TeamKillsProps> = (props) => {
    const { teamSide, kills } = props;

    return <div className="team-kills">
        {kills.map((playerKills, index) => {
            return <div key={index} className={`team-kills__hero team-kills__hero--${teamSide}`}>
                <PlayerKills heroId={playerKills.heroId} playerKillsHeroes={playerKills.kills} />
            </div>
        })}
    </div>
}