import { useHeroIconsQuery } from "../../../api/constants/hero_icons/useHeroIconsQuery";
import { HeroIconProps } from "./HeroIconProps";
import "./HeroIcon.scss";

export const HeroIcon: React.FC<HeroIconProps> = (props) => {
    const { heroName, style = { maxHeight: 100, maxWidth: 100 } } = props;

    const { useHeroIcon } = useHeroIconsQuery();

    const url = useHeroIcon(heroName);

    return (<div className="hero-icon" style={style}>
        <img src={url} style={style} className="hero-icon__image" alt="hero-icon" />
    </div>);
}