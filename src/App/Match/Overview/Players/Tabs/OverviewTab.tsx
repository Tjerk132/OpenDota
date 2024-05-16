import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hero } from '../../../../../components/image/Hero/Hero';
import { TabProps } from './TabProps';
import "./PlayerTabRow.scss";

export const OverviewTab: React.FC<TabProps> = (props) => {

  const { players } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hero</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Lane</TableCell>
            <TableCell>Player</TableCell>
            <TableCell>K</TableCell>
            <TableCell>D</TableCell>
            <TableCell>A</TableCell>
            <TableCell>NET</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow
              key={player.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className={`player-tab-row--${player.teamSide}`}
            >
              <TableCell><Hero heroId={player.heroId} overlay={{ text: player.level, position: 'bottom-right' }} /></TableCell>
              <TableCell>{player.role}</TableCell>
              <TableCell>{player.lane}</TableCell>
              <TableCell>{player.player ?? "Unknown"}</TableCell>
              <TableCell>{player.kills}</TableCell>
              <TableCell>{player.deaths}</TableCell>
              <TableCell>{player.assists}</TableCell>
              <TableCell>{player.networth}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}