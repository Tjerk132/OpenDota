import { Hero } from "../../../../../../components/image/Hero/Hero";
import { HeroIcon } from "../../../../../../components/image/HeroIcon/HeroIcon";
import { PlayerKillsProps } from "./PlayerKillsProps";
import "./PlayerKills.scss";
import { conditionalClassNames } from "../../../../../../extensions";

export const PlayerKills: React.FC<PlayerKillsProps> = (props) => {

    const { heroId, playerKillsHeroes } = props;

    const classNames = (active: boolean) => conditionalClassNames([
        "player-kills__hero",
        { 'player-kills__hero--inactive': !active }
    ]);

    return <div className="player-kills">
        <Hero heroId={heroId} style={{ width: "48px", height: "24px", alignSelf: "center" }} />
        {playerKillsHeroes.map(playerKillsHero => {
            return <div className={classNames(playerKillsHero.amount > 0)}>
                <HeroIcon heroName={playerKillsHero.heroName} style={{ height: 24 }} />
                <span>x{playerKillsHero.amount}</span>
                <span className="player-kills__hero--gold">{playerKillsHero.gainedGold}g</span>
            </div>
        })}
    </div>
}