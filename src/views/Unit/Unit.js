import React, { useEffect, useState } from 'react';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import { Page, Header, SearchInput } from 'components';
import unitApi from 'service/unit';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import UnitTable from './components/UnitsTable';


const Driver = () => {

  const [units, setUnits] = useState([]);

  useEffect(() => {
    unitApi.fetchData().then(r => {
      setUnits(r);
    })
  }, [])

  const Export = (
    <React.Fragment>
      <Button startIcon={<CloudDownloadIcon />}>Exportar</Button>
      <Button variant="contained" s color="primary" startIcon={<AddCircleIcon />}>Crear unidad</Button>
    </React.Fragment>
  )

  return (
    <Page>
      <Header subtitle="Unidades" title="" RightButton={Export} />
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item sm={12} md={4}>
              <SearchInput />
            </Grid>
          </Grid>
          <Divider />
          <UnitTable data={units} />
        </CardContent>
      </Card>
    </Page>
  )
}

export default Driver;