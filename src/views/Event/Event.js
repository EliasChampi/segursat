import React, { useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import { Page, Header, SearchInput } from 'components';
import eventApi from 'service/event';
import { makeStyles } from '@material-ui/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import EventsTable from './components/EventsTable';
/* 

debes agregar el min width de la table
*/
const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(3)
    }
}))


const Event = () => {

    const [events, setEvents] = useState([]);
    //const classes = useStyles();

    useEffect(() => {
        eventApi.fetchData().then(r => {
            setEvents(r);
        })
    }, [])

    const Export = (<Button startIcon={<CloudDownloadIcon />}>Exportar</Button>)

    return (
        <Page>
            <Header subtitle="Ultimos eventos" title="" RightButton={Export} />
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={4}>
                            <SearchInput />
                        </Grid>
                    </Grid>
                    <Divider />
                    <EventsTable data={events} />
                </CardContent>
            </Card>
        </Page>
    )
}

export default Event;