import { useHeroesQuery } from "../../../api/heroes/useHeroesQuery";
import { HeroProps } from "./HeroProps";
import "./Hero.css"

export const Hero: React.FC<HeroProps> = (props) => {

    const { heroId, level } = props;

    const { useHero, isLoading } = useHeroesQuery();

    const url = useHero(heroId);

    return (isLoading ? <div>...</div> : <div className="hero">
        <img src={url} className="hero__image">
            {/* <div>hoi</div> */}
        </img>
        <span className="hero__overlay">
            {level}
        </span>
    </div>
    );
}