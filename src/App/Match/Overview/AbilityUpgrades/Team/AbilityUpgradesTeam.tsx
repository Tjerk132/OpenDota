import { AbilityUpgradesPlayer } from "../Player/AbilityUpgradesPlayer";
import { AbilityUpgradesTeamProps } from "./AbilityUpgradesTeamProps";
import "./AbilityUpgradesTeam.scss";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Hero } from "../../../../../components/image/Hero/Hero";

export const AbilityUpgradesTeam: React.FC<AbilityUpgradesTeamProps> = (props) => {

    const { teamSide, list } = props;

    const maxLevel = list.max(heroAbilityUpgrades => heroAbilityUpgrades.abilityUpgrades.length);

    const levels = Array.from({ length: maxLevel }, (_, i) => i + 1)

    return (
        <div className={`ability-upgrades-team ability-upgrades-team--${teamSide}`}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ padding: "0,0,0,95px" }} />
                            <TableCell style={{ display: "flex" }}>
                                {levels.map((level, index) =>
                                    <tr className="ability-upgrades-team__levels" key={index}>
                                        {level}
                                    </tr>
                                )}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((abilityUpgradesPlayer, index) =>
                            <TableRow key={index}>
                                <TableCell>
                                    <Hero heroId={abilityUpgradesPlayer.heroId} style={{ width: 42, height: 24 }} />
                                </TableCell>
                                <TableCell>
                                    <AbilityUpgradesPlayer {...abilityUpgradesPlayer} />
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}