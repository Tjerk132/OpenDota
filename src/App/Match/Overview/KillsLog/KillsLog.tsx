import { TeamSide } from "../../../../domain/Player/TeamSide";
import { KillsLogProps } from "./KillsLogProps"
import { TeamKills } from "./TeamKills/TeamKills";
import "./KillsLog.scss";
import { Grid } from "@mui/material";
import { Item } from "../../../../components/Item";

export const KillsLog: React.FC<KillsLogProps> = (props) => {

    const { radiantKills, direKills } = props;

    return <div className="kills-log">
        <Grid container spacing={1} rowSpacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <Item>
                    <h4>Radiant kills</h4>
                    <TeamKills kills={radiantKills} teamSide={TeamSide.Radiant} />
                </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Item>
                    <h4>Dire kills</h4>
                    <TeamKills kills={direKills} teamSide={TeamSide.Dire} />
                </Item>
            </Grid>
        </Grid>
    </div>
}