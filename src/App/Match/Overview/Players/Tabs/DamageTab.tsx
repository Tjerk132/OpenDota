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
import { useLane } from '../../../../../hooks/useLane';

import "./PlayerTabRow.scss";

export const DamageTab: React.FC<TabProps> = (props) => {

  const { players } = props;

  const { laneLabel } = useLane();

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
            <TableCell>DMG</TableCell>
            <TableCell>HEAL</TableCell>
            <TableCell>BLD</TableCell>
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
              <TableCell>{laneLabel(player.lane)}</TableCell>
              <TableCell>{player.player ?? "Unknown"}</TableCell>
              <TableCell
                className={topAmountClasses(players.max(player => player.heroDamage) === player.heroDamage)}
              >
                {player.heroDamage}
              </TableCell>
              <TableCell                 
                className={topAmountClasses(players.max(player => player.heroHealing) === player.heroHealing)}
              >
                {player.heroHealing}
              </TableCell>
              <TableCell
                className={topAmountClasses(players.max(player => player.buildingDamage) === player.buildingDamage)}
              >
                {player.buildingDamage}
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
            <TableCell>{players.sum((player) => player.heroDamage)}</TableCell>
            <TableCell>{players.sum((player) => player.heroHealing)}</TableCell>
            <TableCell>{players.sum((player) => player.buildingDamage)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}