import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import { useState } from "react";
import { TabPanelProps } from './TabPanelProps';
import { Tab } from '@mui/material';

export const TabPanel: React.FC<TabPanelProps> = (props) => {

    const { tabLabels, children } = props;

    const [value, setValue] = useState(0);

    const CustomTabPanel = (props: {
        children?: React.ReactNode,
        index: number,
        value: number
    }) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && children}
            </div>
        );
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {tabLabels.map((label, index) => <Tab key={`tab-${label}`} label={label} {...a11yProps(index)} />)}
                </Tabs>
            </Box>
            {children.map((child, index) =>
                <CustomTabPanel value={value} index={index} key={`tab-panel-${index}`}>
                    {child}
                </CustomTabPanel>
            )}
        </div>
    );
}