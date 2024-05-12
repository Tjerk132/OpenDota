import { PlayersTableProps } from './PlayersTableProps';
import Tab from '@mui/material/Tab';
import { OverviewTab } from './Tabs/OverviewTab';
import { FarmTab } from './Tabs/FarmTab';
import { DamageTab } from './Tabs/DamageTab';
import { ItemsTab } from './Tabs/ItemsTab';
import { TabPanel } from '../../../../components/CustomTabPanel/TabPanel';

export const PlayersTable: React.FC<PlayersTableProps> = (props) => {
  const { rows } = props;

  return (
    <TabPanel
      tabLabels={["Overview", "Farm", "Damage", "Items"]}
    >
      <OverviewTab rows={rows} />
      <FarmTab rows={rows} />
      <DamageTab rows={rows} />
      <ItemsTab rows={rows} />
    </TabPanel>
  )
}