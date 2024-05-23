import { TeamSide } from "../../../../domain/Player/TeamSide";
import { TowerProps } from "./TowerProps"

export const TowerSvg: React.FC<TowerProps> = (props) => {
    const { svg, teamSide } = props;

    const strokeWidth = 0.3;
    const stroke = "black";

    const radiantTheme = { front: "green", top: "#80FF80", side: "#006600" };
    const direTheme = { front: "red", top: "#FF8080", side: "#800000" };

    const theme = teamSide === TeamSide.Radiant ? radiantTheme : direTheme;

    return <svg
        {...svg}
        width="24" height="30" viewBox="0 0 20 30" xmlns="http://www.w3.org/2000/svg">
        {/* <!-- Front face --> */}
        <polygon points="5,5 15,5 15,20 5,20" fill={theme.front} stroke={stroke} strokeWidth={strokeWidth} />

        {/* <!-- Top face --> */}
        <polygon points="5,5 3,2 13,2 15,5" fill={theme.top} stroke={stroke} strokeWidth={strokeWidth} />

        {/* <!-- Side face --> */}
        <polygon points="5,5 3,2 3,17 5,20" fill={theme.side} stroke={stroke} strokeWidth={strokeWidth} />

        {/* <!-- Left edge --> */}
        <line x1="3" y1="2" x2="3" y2="17" stroke={stroke} strokeWidth={strokeWidth} />
        {/* <!-- Top edge --> */}
        <line x1="3" y1="2" x2="13" y2="2" stroke={stroke} strokeWidth={strokeWidth} />
        {/* <!-- Right edge --> */}
        <line x1="13" y1="2" x2="15" y2="5" stroke={stroke} strokeWidth={strokeWidth} />
    </svg>
}