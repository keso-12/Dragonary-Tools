import { ChangeEvent, useState, ReactNode } from 'react';
import {
  Typography, Tabs, Tab, Box,
} from '@material-ui/core';
import useStyles from './styles';

export type TabPanelProps = {
  children: ReactNode;
  index: number;
  value: number;
}

export type TabControllerProps = {
  tabContent: {
    header: string,
    content?: ReactNode,
  }[],
}

export function TabPanel({
  children, value, index, ...other
}: TabPanelProps) {
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.tabPanel} p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function a11yProps(index: number) {
  return {
    id: index,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabController = ({ tabContent }: TabControllerProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} className={classes.tabHeader}>
        {tabContent.map(({ header }, i: number) => (
          <Tab
            className={`${classes.tabHeader} ${i === value && classes.selectedTab}`}
            label={header}
            {...a11yProps}
          />
        ))}
      </Tabs>
      {tabContent.map(({ content }, i: number) => (
        <TabPanel value={value} index={i}>
          {content || 'empty tab...'}
        </TabPanel>
      ))}
    </div>
  );
};

export default TabController;
