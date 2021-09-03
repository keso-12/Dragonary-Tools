import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  tabHeader: {
    backgroundColor: theme.palette.background.paper,
    color: '#000',
    border: 0,
  },
  selectedTab: {
    background: theme.palette.primary.main,
    color: theme.palette.info.contrastText,
  },
  tabPanel: {
    padding: `${theme.spacing(2)}px 0px`,
  },
}));
