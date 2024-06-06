import { TeamAdvantagesProps } from "./TeamAdvantagesProps";
import { AdvantageGraph } from "./AdvantageGraph/AdvantageGraph";
import { useTeamAdvantages } from "./useTeamAdvantages";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { TeamAdvantageGraph } from "../../../../domain/Graph/TeamAdvantage/TeamAdvantageGraph";
import "./TeamAdvantages.scss";

export const TeamAdvantages: React.FC<TeamAdvantagesProps> = (props) => {

    const { radiantGoldAdvantage, radiantXpAdvantage } = props;

    const [activeGraph, setActiveGraph] = useState<TeamAdvantageGraph>(TeamAdvantageGraph.Gold);

    const teamAdvantageGraphData = activeGraph === TeamAdvantageGraph.Gold ? radiantGoldAdvantage : radiantXpAdvantage;

    const { advantageGraph } = useTeamAdvantages(teamAdvantageGraphData);

    return (<div className="team-advantages">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
                value={activeGraph} 
                onChange={(_: React.SyntheticEvent, value: TeamAdvantageGraph) => setActiveGraph(value)} 
                aria-label="team-advantage-tabs">
                <Tab
                    label="Gold Advantage"
                    onClick={() => setActiveGraph(TeamAdvantageGraph.Gold)}
                />
                <Tab
                    label="Xp Advantage"
                    onClick={() => setActiveGraph(TeamAdvantageGraph.Xp)}
                />
            </Tabs>
        </Box>
        <AdvantageGraph {...advantageGraph} />
    </div>);
}