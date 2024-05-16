import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hero } from '../../../../../components/image/Hero/Hero';
import { PlayerItem } from '../../../../../components/image/PlayerItem/PlayerItem';
import { TabProps } from './TabProps';
import { PlayerItemType } from '../../../../../domain/Player/PlayerItemType';
import "./PlayerTabRow.scss";

export const ItemsTab: React.FC<TabProps> = (props) => {

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
            <TableCell>Wards</TableCell>
            <TableCell>Items</TableCell>
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
              <TableCell>{player.player}</TableCell>
              <TableCell>
                {player.observersPlaced ?? "-"}
                /
                {player.sentriesPlaced ?? "-"}
              </TableCell>
              <TableCell>
                {player.buffs.aghanimsShard && <PlayerItem itemId={609} />}
                {player.buffs.aghanimsBlessing && <PlayerItem itemId={108} />}
                {player.buffs.moonShard && <PlayerItem itemId={247} />}
                <br />
                {player.items.map((item, index) => <PlayerItem key={index} itemId={item.itemId} />)}
                <PlayerItem itemId={player.neutralItemId} type={PlayerItemType.Neutral} />
                <br />
                {player.backpack.map((item, index) => <PlayerItem key={index} itemId={item.itemId} type={PlayerItemType.Backpack} />)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}