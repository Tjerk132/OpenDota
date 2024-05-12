import { MatchResultProps } from "./MatchResultProps";

export const MatchResult: React.FC<MatchResultProps> = (props) => {
    const { radiantWin, radiantScore, direScore, matchDuration } = props;

    return (<div>       
        <h2>
              {radiantWin ? "Radiant victory" : "Dire victory"}
            </h2>
            <strong>{radiantScore}</strong> {matchDuration.toFixed(2)} <strong>{direScore}</strong>
        <br />
    </div>);
}