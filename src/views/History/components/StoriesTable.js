import React from "react"
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Table } from "@material-ui/core";
import { VisibilityRounded } from "@material-ui/icons";

const StoriesTable = () => {
  return(
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Placa</TableCell>
            <TableCell component="th">Operador Logístico</TableCell>
            <TableCell component="th">Tipo de Servicio</TableCell>
            <TableCell component="th">Nombre del Conductor</TableCell>
            <TableCell component="th">Fecha de Creacion</TableCell>
            <TableCell component="th">Ver Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>ATC-234</TableCell>
            <TableCell component="th">SEGURSAT</TableCell>
            <TableCell component="th">ENVASADO</TableCell>
            <TableCell component="th">SUCAPUCA KEVIN	</TableCell>
            <TableCell component="th">03/09/2020 10:44 pm</TableCell>
            <TableCell>
              <Button
                color="secondary"
                size="small"
              >
                <VisibilityRounded />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StoriesTable;