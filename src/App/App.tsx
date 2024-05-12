import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { MatchOverviewPage } from '../pages/MatchOverview/MatchOverviewPage';

export const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/match/:matchId"
          element={<MatchOverviewPage />}
        >
        </Route>
      </Routes>
    </Router>
  );
}
