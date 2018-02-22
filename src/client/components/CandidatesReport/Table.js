import React, {Component} from 'react';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';


class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th className="ye-table-header"><i className="fa fa-trophy mr-2" aria-hidden="true"/>Competencias</th>
                    <th className="ye-table-header"><i className="fa fa-heartbeat mr-2" aria-hidden="true"/>Tipo de<br/> competencia</th>
                    <th className="ye-table-header"><i className="fa fa-globe mr-2" aria-hidden="true"/>Rango de los evaluados <br/> en el mercado laboral</th>
                    <th className="ye-table-header"><i className="fa fa-briefcase mr-2" aria-hidden="true"/>Puesto</th>
                    <th className="ye-table-header"><i className="fa fa-user mr-2" aria-hidden="true"/>Persona</th>
                    <th className="ye-table-header"><i className="fa fa-graduation-cap mr-2" aria-hidden="true"/>Gap<br/> diferencia</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.props.data.CompetencesAnalyzed.map(item => {return (
                    <tr>
                      <td className='ye-table-column-title'>{item.CompetenceName}</td>
                      <td className='ye-table-column'>{item.CompetenceType}</td>
                      <td className='ye-table-column'>{item.CandidatesAverageScoreMinimum + ' - ' + item.CandidatesAverageScoreMaximum}</td>
                      <td className='ye-table-column'>{item.VacantScoreRequired}</td>
                      <td className='ye-table-column'>{item.CandidateScore}</td>
                      <td className='ye-table-column'>{item.CandidateVacantGap}</td>
                    </tr>
                  )})}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default Tables;
