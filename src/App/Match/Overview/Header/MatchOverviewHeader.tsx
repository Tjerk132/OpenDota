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


export const MatchOverviewHeader: React.FC<MatchOverviewHeaderProps> = (props) => {

    const { matchId, lobbyType, gameMode, region, startTime, duration } = props;

    const matchDuration = (duration / 60);

    const matchEndDateLabel = () => {
        const unixNow = dayjs(Date.now()).unix();
        const unixStartTime = dayjs.unix(startTime).unix();

        const secondsToDays = (60 * 60 * 24);

        var daysAgo = Math.ceil((unixNow - (unixStartTime + matchDuration)) / secondsToDays);
        if (daysAgo >= 7) {
            var weeksAgo = daysAgo / 7;
            return `${weeksAgo} weeks ago`;
        }
        return `${daysAgo} days ago`;
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
                        <TableRow
                        // key={index}
                        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{lobbyType}</TableCell>
                            <TableCell>{gameMode}</TableCell>
                            <TableCell>{region}</TableCell>
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