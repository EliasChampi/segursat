import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import { Page, Header, SearchInput } from 'components';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import StoriesTable from "./components/StoriesTable"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import { yourdateactual } from "common/decorator";
import { Search as SearchIcon } from "@material-ui/icons";
import unitApi from "service/unit";
import eventApi from "service/event";
import EventDialog from "views/Event/components/EventDialog";
import { API } from "constants/global";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    justifyContent: "space-between"
  },
  formControl: {
    minWidth: 150,
  },
}))

const History = () => {
  const classes = useStyles();
  const [plate, setPlate] = useState(null);
  const [date, setDate] = useState(yourdateactual());
  const [loading, setLoading] = useState(false);
  const [finder, setFinder] = useState("");
  const [units, setUnits] = useState([]);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState({});
  const [events, setEvents] = useState([]);
  const handlePlateChange = (e, newV) => setPlate(newV);
  const handleDateChange = ({ target }) => setDate(target.value);

  const handleSearchClick = () => {
    setLoading(true);
    eventApi.search({ date, plate: plate.license_plate }).then(r => {
      setEvents(r)
      setLoading(false);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    let mounted = true
    const fetchUnits = () => {
      unitApi.fetchData().then(r => {
        if (mounted) {
          setUnits(r)
        }
      }).catch(err => console.log(err))
    }
    fetchUnits();

    return () => {
      mounted = false
    }
  }, [])

  const handleModal = (item) => {
    let sel = {};
    if (!modal) {
      const maped = JSON.parse(item.images)
      const images = [];
      for (const i in maped) {
        images.push({ source: API + "/" + maped[i] })
      }
      sel = { ...item, images }
    }
    setSelected(sel)
    setModal(!modal);
  }

  const Export = (<Button disabled startIcon={<CloudDownloadIcon />}>Imprimir</Button>)

  const searchable = (plate !== null && Object.keys(plate).length) && date;

  const filtered = events.filter(item => new RegExp(finder, "i").test(item.driver_fullname));

  const handleSearchChange = (event) => {
    setFinder(event.target.value);
  }

  const handleKeyPress = (e) => {
    e.persist();
    if (e.nativeEvent.key === "Enter") {
      if (searchable) {
        handleSearchClick();
      }
    }
  }

  return (
    <Page>
      <Header subtitle="Históricos" title="" RightButton={Export} />
      <Card>
        <CardContent>
          <Grid container spacing={3} className={classes.card} >
            <Grid item sm={12} md={4} container spacing={1}>
              <Grid item>
                <Autocomplete
                  className={classes.formControl}
                  onChange={handlePlateChange}
                  id="combo-box-demo"
                  options={units}
                  getOptionLabel={(option) => option.license_plate}
                  renderInput={(params) => <TextField {...params} label="Placa" variant="outlined" />}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="date"
                  label="Buscar por fecha"
                  type="date"
                  variant="outlined"
                  value={date}
                  onChange={handleDateChange}
                  onKeyDown={handleKeyPress}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <IconButton disabled={!searchable} color="secondary" onClick={handleSearchClick}><SearchIcon /></IconButton>
              </Grid>
            </Grid>
            <Grid item sm={12} md={4}>
              <SearchInput onChange={handleSearchChange} placeholder="Buscar por conductor" />
            </Grid>
          </Grid>
          <Divider />
          <StoriesTable events={filtered} loading={loading} onDetailClick={handleModal} />
        </CardContent>
      </Card>
      <EventDialog open={modal} onClose={handleModal} item={selected} />
    </Page>
  )
}

export default History;