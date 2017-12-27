import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Table extends React.Component {
  render() {

    var products = [{
      id: 'Comunicacionn efectiva',
      name: "Necesaria",
      price: '3.5',
      price2: '3.5',
      price3: '3.5',
      price4: '3.5'
  }, {
    id: 'Comunicacionn efectiva',
    name: "Necesaria",
    price: '3.5',
    price2: '3.5',
    price3: '3.5',
    price4: '3.5'
  }];

    return (
      <BootstrapTable data={ products }>
        <TableHeaderColumn dataField='id' isKey>Competencias</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Tipo de<br/> competencia</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Puntuacion<br/> obtenida</TableHeaderColumn>
        <TableHeaderColumn dataField='price2'>Puntuacion<br/> requerida</TableHeaderColumn>
        <TableHeaderColumn dataField='price3'>Gap<br/> diferencia</TableHeaderColumn>
        <TableHeaderColumn dataField='price4'>Rango de los evaluados<br/> en el mercado laboral</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
