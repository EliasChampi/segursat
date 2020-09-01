import React, { useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import { Page, Header, SearchInput } from 'components';
import driverApi from 'service/driver';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DriverTable from './components/DriverTable';


const Driver = () => {

    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        driverApi.fetchData().then(r => {
            setDrivers(r);
        })
    }, [])

    const Export = (
        <React.Fragment>
            <Button startIcon={<CloudDownloadIcon />}>Exportar</Button>
            <Button variant="contained" s color="primary" startIcon={<AddCircleIcon />}>Agregar</Button>
        </React.Fragment>
    )

    return (
        <Page>
            <Header subtitle="Conductores" title="" RightButton={Export} />
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={4}>
                            <SearchInput />
                        </Grid>
                    </Grid>
                    <Divider />
                    <DriverTable data={drivers} />
                </CardContent>
            </Card>
        </Page>
    )
}

export default Driver;