import { MatchOverviewHeaderProps } from "./MatchOverviewHeaderProps";
import dayjs from "dayjs";
import "./MatchOverviewHeader.scss";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLobbyTypeQuery } from "../../../../api/constants/lobby_type/useLobbyTypeQuery";
import { useGameModeQuery } from "../../../../api/constants/game_modes/useGameModeQuery";
import { useRegionQuery } from "../../../../api/constants/region/useRegionQuery";


export const MatchOverviewHeader: React.FC<MatchOverviewHeaderProps> = (props) => {

    const { matchId, lobbyTypeId, gameModeId, regionId, startTime, duration } = props;

    const { useLobbyType } = useLobbyTypeQuery();
    const { useGameMode } = useGameModeQuery();
    const { useRegion } = useRegionQuery();

    const matchDuration = (duration / 60);

    const matchEndDateLabel = () => {
        const unixNow = dayjs(Date.now()).unix();
        const unixStartTime = dayjs.unix(startTime).unix();

        const secondsToDays = (60 * 60 * 24);

        var daysAgo = Math.ceil((unixNow - (unixStartTime + matchDuration)) / secondsToDays);
        if(daysAgo >= 30) {
            var monthsAgo = daysAgo / 30;
            return `${monthsAgo.toFixed(0)} months ago`;
        }
        if (daysAgo >= 7) {
            var weeksAgo = daysAgo / 7;
            return `${weeksAgo.toFixed(0)} weeks ago`;
        }
        return `${daysAgo.toFixed(0)} days ago`;
    }

    return (
        <div className="match-overview-header">
            <div className="match-overview-header__title">
                <h2>Match {matchId}</h2>
            </div>
            Overview
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 375 }} size="small" aria-label="matchoverview header">
                    <TableHead>
                        <TableRow>
                            <TableCell>{useLobbyType(lobbyTypeId)}</TableCell>
                            <TableCell>{useGameMode(gameModeId)}</TableCell>
                            <TableCell>{useRegion(regionId)}</TableCell>
                            <TableCell>{matchDuration.toFixed(2)}</TableCell>
                            <TableCell>{matchEndDateLabel()}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>LOBBY TYPE</TableCell>
                            <TableCell>GAME MODE</TableCell>
                            <TableCell>REGION</TableCell>
                            <TableCell>DURATION</TableCell>
                            <TableCell>MATCH ENDED</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}