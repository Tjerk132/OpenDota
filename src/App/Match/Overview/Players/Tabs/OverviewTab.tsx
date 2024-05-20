import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Hero } from '../../../../../components/image/Hero/Hero';
import { TabProps } from './TabProps';
import { conditionalClassName } from '../../../../../extensions/ClassNameExtensions';

import "./PlayerTabRow.scss";

export const OverviewTab: React.FC<TabProps> = (props) => {

  const { players } = props;

  const topAmountClasses = (condition: boolean) => conditionalClassName('player-tab-row__top-amount', condition);

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
              className={`player-tab-row--${player.teamSide}`}
            >
              <TableCell><Hero heroId={player.heroId} overlay={{ text: player.level, position: 'bottom-right' }} /></TableCell>
              <TableCell>{player.role}</TableCell>
              <TableCell>{player.lane}</TableCell>
              <TableCell>{player.player ?? "Unknown"}</TableCell>
              <TableCell
                className={topAmountClasses(players.max(player => player.kills) === player.kills)}
              >
                {player.kills}
              </TableCell>
              <TableCell
                className={topAmountClasses(players.min(player => player.deaths) === player.deaths)}
              >
                {player.deaths}
              </TableCell>
              <TableCell
                className={topAmountClasses(players.max(player => player.assists) === player.assists)}
              >
                {player.assists}
              </TableCell>
              <TableCell
                className={topAmountClasses(players.max(player => player.networth) === player.networth)}
              >
                {player.networth}
              </TableCell>
            </TableRow>
          ))}
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell />
            <TableCell>{players.sum((player) => player.kills)}</TableCell>
            <TableCell>{players.sum((player) => player.deaths)}</TableCell>
            <TableCell>{players.sum((player) => player.assists)}</TableCell>
            <TableCell>{players.sum((player) => player.networth)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}