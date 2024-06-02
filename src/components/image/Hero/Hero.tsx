import { HeroProps } from "./HeroProps";
import { useHeroesQuery } from "../../../api/constants/heroes/useHeroesQuery";
import "./Hero.scss"

export const Hero: React.FC<HeroProps> = (props) => {

    const { heroId, overlay, style = { maxHeight: 100, maxWidth: 100 } } = props;

    const { useHeroById, isLoading } = useHeroesQuery();

    const url = useHeroById(heroId);

    return (isLoading ? <div>...</div> : <div className="hero" style={style}>
        <img src={url} style={style} className="hero__image" alt="hero" />
        {overlay && <span className={`hero__overlay hero__overlay--${overlay.position}`} >
            {overlay.text}
        </span>}
    </div>);
}