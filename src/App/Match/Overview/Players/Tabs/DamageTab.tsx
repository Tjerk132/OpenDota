import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hero } from '../../../../../components/image/Hero/Hero';
import { PlayersTableProps } from '../PlayersTableProps';

export const DamageTab: React.FC<PlayersTableProps> = (props) => {

  const { rows: players } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hero</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Lane</TableCell>
            <TableCell>Player</TableCell>
            <TableCell>DMG</TableCell>
            <TableCell>HEAL</TableCell>
            <TableCell>BLD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players.map((player) => (
            <TableRow
              key={player.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell><Hero heroId={player.heroId} level={player.level} /></TableCell>
              <TableCell>{player.role}</TableCell>
              <TableCell>{player.lane}</TableCell>
              <TableCell>{player.player ?? "Unknown"}</TableCell>
              <TableCell>{player.heroDamage}</TableCell>
              <TableCell>{player.heroHealing}</TableCell>
              <TableCell>{player.buildingDamage}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}