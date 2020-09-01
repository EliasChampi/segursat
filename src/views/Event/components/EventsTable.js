import React from "react"
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Table } from "@material-ui/core";
import { VisibilityRounded } from "@material-ui/icons";
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
const EventsTable = ({ data }) => {
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Placa</TableCell>
                        <TableCell component="th">Operador Logístico</TableCell>
                        <TableCell component="th">Tipo de Servicio</TableCell>
                        <TableCell component="th">Nombre del Conductor</TableCell>
                        <TableCell component="th">Fecha de Creacion</TableCell>
                        <TableCell component="th">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.unitid}
                            </TableCell>
                            <TableCell>{row.logistic_operator}</TableCell>
                            <TableCell>{row.type_of_service}</TableCell>
                            <TableCell>{row.driver_fullname}</TableCell>
                            <TableCell>{yourdate(row.datetime, "[a las] hh:mm a")}</TableCell>
                            <TableCell>
                                <Button
                                    color="secondary"
                                    size="small"

                                >
                                    <VisibilityRounded />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

EventsTable.propTypes = {
    data: PropTypes.array.isRequired,
}

export default EventsTable;