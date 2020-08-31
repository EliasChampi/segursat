import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody,MDBIcon,MDBInputGroup,MDBBtn } from 'mdbreact';

const TablesPage =  () => {
  return (
    <>
      <MDBRow>
      <MDBCol md="12">
        <MDBCard>
          <MDBCardBody>
            <MDBRow>
              <MDBCol size="4">
              <MDBInputGroup
                hint="Buscar"
                containerClassName="mb-3"
                append={
                  <MDBBtn color="primary" className="m-0 px-3 py-2 z-depth-0">
                    Buscar
                  </MDBBtn>
                }
              />
              </MDBCol>
              <MDBCol size="4"></MDBCol>
              <MDBCol size="4">
                <h3 className="mt-2 text-right">
                <MDBBtn color="primary" disabled className="m-0 px-3 py-2 z-depth-0">
                  Crear checkpoint
                </MDBBtn>
                </h3>
              </MDBCol>
            </MDBRow>
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th>Dni</th>
                  <th>Placa</th>
                  <th>Nombres</th>
                  <th>Fecha de creación</th>
                  <th>Acciones</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>71036880</td>
                  <td>AVC-798</td>
                  <td>ESLIM DAGA CASTRO</td>
                  <td>14/08/2020</td>
                  <td>
                    <a className="btn btn-primary btn-sm"><MDBIcon icon="eye"/></a> | &nbsp;
                    <a className="btn btn-danger btn-sm"><MDBIcon icon="trash"/></a>
                  </td>
                </tr>
                <tr>
                  <td>71036880</td>
                  <td>AVC-798</td>
                  <td>ESLIM DAGA CASTRO</td>
                  <td>14/08/2020</td>
                  <td>
                    <a className="btn btn-primary btn-sm"><MDBIcon icon="eye"/></a> | &nbsp;
                    <a className="btn btn-danger btn-sm"><MDBIcon icon="trash"/></a>
                  </td>
                </tr>
                <tr>
                  <td>71036880</td>
                  <td>AVC-798</td>
                  <td>ESLIM DAGA CASTRO</td>
                  <td>14/08/2020</td>
                  <td>
                    <a className="btn btn-primary btn-sm"><MDBIcon icon="eye"/></a> | &nbsp;
                    <a className="btn btn-danger btn-sm"><MDBIcon icon="trash"/></a>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  )
}

export default TablesPage;