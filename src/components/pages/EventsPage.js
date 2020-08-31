import React from 'react';
import { MDBDataTableV5,MDBIcon,MDBBtn } from 'mdbreact';

export default function TopSearchSelect() {
  const btnEdit = <MDBBtn color="primary" className="btn-sm"><MDBIcon icon="eye" /></MDBBtn>
  const btnDelete = <MDBBtn color="danger" className="btn-sm"><MDBIcon icon="trash" /></MDBBtn>
  const btn = [btnEdit,btnDelete]
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Placa',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Operador Logistico',
        field: 'position',
        width: 270,
      },
      {
        label: 'Tipo de Servicio',
        field: 'office',
        width: 200,
      },
      {
        label: 'Nombre del conductor',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Creación',
        field: 'date',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Acción',
        field: 'salary',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        name: 'ATC-498',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2011/04/25',
        salary: btn,
      },
      {
        name: 'TCF-745',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2011/07/25',
        salary: btn,
      },
      {
        name: 'ACX-132',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2009/01/12',
        salary: btn,
      },
      {
        name: 'ANO-112',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2012/03/29',
        salary: btn,
      },
      {
        name: 'ONA-798',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2008/11/28',
        salary: btn,
      },
      {
        name: 'YIU-123',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2012/12/02',
        salary: btn,
      },
      {
        name: 'KJL-132',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2012/08/06',
        salary: btn,
      },
      {
        name: 'EQW-798',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2010/10/14',
        salary: btn,
      },
      {
        name: 'IPO-741',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: '39',
        date: '2009/09/15',
        salary: btn,
      },
      {
        name: 'VMN-456',
        position: 'REPARTO',
        office: 'SEGURSAT',
        age: 'Admin',
        date: '2008/12/13',
        salary: btn,
      }
    ],
  });

  return (
    <MDBDataTableV5
      style={{background : "white"}}
      hover
      entries={6}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      className="text-center"
    />
  );
}