import Divider from '@mui/material/Divider';
import { useParams } from 'react-router-dom';
import { useMatchOverviewPage } from './useMatchOverviewPage';
import { MatchOverviewHeader } from '../../App/Match/Overview/Header/MatchOverviewHeader';
import { MatchResult } from '../../App/Match/Overview/Result/MatchResult';
import { PlayersTable } from '../../App/Match/Overview/Players/PlayersTable';
import { PicksAndBans } from '../../App/Match/Overview/PicksAndBans/PicksAndBans';
import { TeamAdvantages } from '../../App/Match/Overview/TeamAdvantages/TeamAdvantages';
import './MatchOverviewPage.scss';
import { BuildingStatus } from '../../App/Match/Overview/BuildingStatus/BuildingStatus';
import { KillsLog } from '../../App/Match/Overview/KillsLog/KillsLog';

export const MatchOverviewPage: React.FC = () => {

  const { matchId: matchIdParam } = useParams();
  const matchId = Number(matchIdParam ?? 0);

  const { matchOverviewHeader, matchResult, radiantPlayersTable, direPlayersTable, picksAndBans, teamAdvantages, buildingStatus, killsLog, isLoading } = useMatchOverviewPage(matchId);

  return (
    <div className="App">
      <title>Match Overview</title>
      <header className="App-header">
      </header>
      {isLoading ? "Loading..." : <div>

        <MatchOverviewHeader {...matchOverviewHeader} />

        <Divider />

        <MatchResult {...matchResult} />

        <h2>The Radiant</h2>
        <PlayersTable {...radiantPlayersTable} />

        <h2>The Dire</h2>
        <PlayersTable {...direPlayersTable} />

        <h3>Picks and Bans</h3>

        <PicksAndBans {...picksAndBans} />

        <h3>Team advantages per minute</h3>

        <TeamAdvantages {...teamAdvantages} />

        <BuildingStatus {...buildingStatus} />

        <KillsLog {...killsLog} />

        <br />
        <br />

        {/*
    {JSON.stringify(match.pre_game_duration)}
    {JSON.stringify(match.start_time)}
    {JSON.stringify(match.match_seq_num)}
    {JSON.stringify(match.cluster)}
    {JSON.stringify(match.first_blood_time)}
    {JSON.stringify(match.human_players)}
    {JSON.stringify(match.leagueid)}
    {JSON.stringify(match.flags)}
    {JSON.stringify(match.engine)}
\\
    {JSON.stringify(match.od_data)}
    <br />
    {JSON.stringify(match.metadata)}
    <br />
    {JSON.stringify(match.patch)} */}
      </div>}
    </div>
  )
}