import React from "react";
import { makeStyles } from '@material-ui/styles';
import { Page, Header, SearchInput } from 'components';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import StoriesTable from "./components/StoriesTable"
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { yourdateactual } from "./../../common/decorator";

const useStyles = makeStyles((theme) => ({
  card: {
      marginBottom: theme.spacing(2),
      justifyContent : "space-between"
  },
  formControl: {
    minWidth: 120,
  },
  selectPlate : {
    paddingRight : "15px"
  }
}))

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const History = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setAge(event.target.value);
    setCurrency(event.target.value);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const Export = (<Button disabled startIcon={<CloudDownloadIcon />}>Imprimir</Button>)

  return (
    <Page>
      <Header subtitle="Historicos" title="" RightButton={Export} />
      <Card>
        <CardContent>
          <Grid container spacing={3} className={classes.card} >
            <Grid item sm={12} md={4}>
              {/* <SearchInput placeholder="Buscar por placa o conductor" /> */}
              <FormControl className={classes.formControl}>
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Placa"
                    value={currency}
                    onChange={handleChange}
                    helperText="Porfavor seleccionar placa"
                    className={classes.selectPlate}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                  </TextField>
                </div>
              </form>
              </FormControl>
              <TextField
                id="date"
                label="Buscar por fecha"
                type="date"
                defaultValue={yourdateactual(Date())}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.selectPlate}
              />
              <Button variant="contained" color="primary" className={classes.button}><ArrowForwardIosIcon/></Button>
            </Grid>
            <Grid item sm={12} md={4}>
              <SearchInput placeholder="Buscar por placa o conductor" />
            </Grid>
          </Grid>
          <Divider />
          <StoriesTable />
        </CardContent>
      </Card>
    </Page>
  )
}

export default History;