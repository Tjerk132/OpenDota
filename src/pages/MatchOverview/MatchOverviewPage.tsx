import Divider from '@mui/material/Divider';
import { useParams } from 'react-router-dom';
import { useMatchOverviewPage } from './useMatchOverviewPage';
import { MatchOverviewHeader } from '../../App/Match/Overview/Header/MatchOverviewHeader';
import { MatchResult } from '../../App/Match/Overview/Result/MatchResult';
import { PlayersTable } from '../../App/Match/Overview/Players/PlayersTable';
import { PicksAndBans } from '../../App/Match/Overview/PicksAndBans/PicksAndBans';
import './MatchOverviewPage.scss';

export const MatchOverviewPage: React.FC = () => {

  const { matchId: matchIdParam } = useParams();
  const matchId = Number(matchIdParam ?? 0);

  const { matchOverviewHeader, matchResult, radiantPlayersTable, direPlayersTable, picksAndBans, isLoading } = useMatchOverviewPage(matchId);

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

        <br />

        {/*
    {JSON.stringify(match.pre_game_duration)}
    {JSON.stringify(match.start_time)}
    {JSON.stringify(match.match_seq_num)}
    {JSON.stringify(match.tower_status_radiant)}
    {JSON.stringify(match.tower_status_dire)}
    {JSON.stringify(match.barracks_status_radiant)}
    {JSON.stringify(match.barracks_status_dire)}
    {JSON.stringify(match.cluster)}
    {JSON.stringify(match.first_blood_time)}
    {JSON.stringify(match.lobby_type)}
    {JSON.stringify(match.human_players)}
    {JSON.stringify(match.leagueid)}
    {JSON.stringify(match.game_mode)}
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