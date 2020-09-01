import React from "react"
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Button, Table } from "@material-ui/core";
import { Create as CreateIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { yourdate } from "common/decorator";
const DriverTable = ({ data }) => {
    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>DNI</TableCell>
                        <TableCell component="th">Nombre</TableCell>
                        <TableCell component="th">Apellidos</TableCell>
                        <TableCell component="th">Licencia</TableCell>
                        <TableCell component="th">Usuario</TableCell>
                        <TableCell component="th">Fecha de Creación</TableCell>
                        <TableCell component="th">Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.dni}>
                            <TableCell component="th" scope="row">
                                {row.dni}
                            </TableCell>
                            <TableCell>{row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell>{row.license_number}</TableCell>
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

DriverTable.propTypes = {
    data: PropTypes.array.isRequired,
}

export default DriverTable;