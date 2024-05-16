import { PlayersTableProps } from './PlayersTableProps';
import { OverviewTab } from './Tabs/OverviewTab';
import { FarmTab } from './Tabs/FarmTab';
import { DamageTab } from './Tabs/DamageTab';
import { ItemsTab } from './Tabs/ItemsTab';
import { TabPanel } from '../../../../components/CustomTabPanel/TabPanel';
import "./PlayersTable.scss";

export const PlayersTable: React.FC<PlayersTableProps> = (props) => {
  const { selectedTab, setTab, players } = props;

  return (<div className='players-table'>
    <TabPanel
      tabLabels={["Overview", "Farm", "Damage", "Items"]}
      selectedTab={selectedTab}
      setTab={setTab}
    >
      <OverviewTab players={players} />
      <FarmTab players={players} />
      <DamageTab players={players} />
      <ItemsTab players={players} />
    </TabPanel>
  </div>)
}