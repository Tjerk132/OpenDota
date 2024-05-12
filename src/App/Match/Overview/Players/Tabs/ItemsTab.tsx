import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hero } from '../../../../../components/image/Hero/Hero';
import { PlayersTableProps } from '../PlayersTableProps';
import { PlayerItem } from '../../../../../components/image/PlayerItem/PlayerItem';

export const ItemsTab: React.FC<PlayersTableProps> = (props) => {

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
            <TableCell>Wards</TableCell>
            <TableCell>Items</TableCell>
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
              <TableCell>{player.player}</TableCell>
              <TableCell>
                {player.observersPlaced ?? "-"}
                /
                {player.sentriesPlaced ?? "-"}
              </TableCell>
              <TableCell>
                Buffs: {player.buffs.aghanimsShard && <PlayerItem itemId={609} />}
                {player.buffs.aghanimsBlessing && <PlayerItem itemId={108} />}
                {player.buffs.moonShard && <PlayerItem itemId={247} />}
                <br />
                Items: {player.items.map((item, index) => <PlayerItem key={index} itemId={item.itemId} />)}
                <br />
                Neutral: <PlayerItem itemId={player.neutralItemId} neutral />
                <br />
                Backpack: {player.backpack.map((item, index) => <PlayerItem key={index} itemId={item.itemId} />)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}