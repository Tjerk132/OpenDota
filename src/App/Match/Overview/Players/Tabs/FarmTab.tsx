import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hero } from '../../../../../components/image/Hero/Hero';
import "./PlayerTabRow.scss";
import { TabProps } from './TabProps';

export const FarmTab: React.FC<TabProps> = (props) => {

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
            <TableCell>LH</TableCell>
            <TableCell>DN</TableCell>
            <TableCell>GPM</TableCell>
            <TableCell>XPM</TableCell>
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
              <TableCell>{player.lasthits}</TableCell>
              <TableCell>{player.denies}</TableCell>
              <TableCell>{player.gpm}</TableCell>
              <TableCell>{player.xppm}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}