import { TeamSide } from "../../../../domain/Player/TeamSide";
import { TeamSideCubeProps } from "./TeamSideCubeProps";

//Use this componont for towers, barracks, ancient etc 
export const TeamSideCube: React.FC<TeamSideCubeProps> = (props) => {

    const { svg, polygons, lines, teamSide, isActive } = props;

    const radiantTheme = {
        active: { front: "green", top: "#80FF80", side: "#006600" },
        inActive: { front: "#003300", top: "#003300", side: "#003300" }
    };

    const direTheme = {
        active: { front: "red", top: "#FF8080", side: "#800000" },
        inActive: { front: "#4D0000", top: "#4D0000", side: "#4D0000" },
    }

    const teamTheme = teamSide === TeamSide.Radiant ? radiantTheme : direTheme;

    const theme = isActive ? teamTheme.active : teamTheme.inActive;

    const strokeWidth = 0.3;
    const stroke = isActive ? "#1a1a1a" : teamTheme.active.front;

    //find more elegant solution for this
    const getFillColor = (index: number) => {
        if (index === 0) return theme.front;
        if (index === 1) return theme.top;
        return theme.side;
    }

    return <svg
        {...svg}
        width="24" height="30" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg"
    >
        {polygons?.map((polygon, index) => <polygon key={index} {...polygon} fill={getFillColor(index)} stroke={stroke} strokeWidth={strokeWidth} />)}
        {lines?.map((line, index) => <line {...line} key={index} stroke={stroke} strokeWidth={strokeWidth} />)}
    </svg>
}