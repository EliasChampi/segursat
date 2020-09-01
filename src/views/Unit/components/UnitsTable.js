import React from "react"
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Table } from "@material-ui/core";
import { Create as CreateIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
const UnitTable = ({ data }) => {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Placa</TableCell>
            <TableCell component="th">Operador logístico</TableCell>
            <TableCell component="th">Proveedor</TableCell>
            <TableCell component="th">Tipo de Servicio</TableCell>
            <TableCell component="th">Usuario</TableCell>
            <TableCell component="th">Fecha de Creación</TableCell>
            <TableCell component="th">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.license_plate}>
              <TableCell component="th" scope="row">
                {row.license_plate}
              </TableCell>
              <TableCell>{row.provider}</TableCell>
              <TableCell>{row.logistic_operator}</TableCell>
              <TableCell>{row.service_type}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{yourdate(row.created)}</TableCell>
              <TableCell>
                <Button
                  color="link"
                  size="small"

                >
                  <CreateIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

UnitTable.propTypes = {
  data: PropTypes.array.isRequired,
}

export default UnitTable;