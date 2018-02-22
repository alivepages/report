import React from 'react';
import moment from 'moment';
moment.locale('es');

export default class CandidatesExperiences extends React.Component {
   getExperience(block){
  		var today =  (moment(new Date()).format('YYYY-MM-DD')) + 'T00:00:00';
			var JobStart =  block.StartDate;
			var JobEnd =  block.EndDate === null ? today : block.EndDate;
			var experienceDay = moment(JobEnd).diff(JobStart, 'days', false);
  		// convertir a año y mes el total de dias
  		var a = experienceDay / 365.25;
  		var roundToYears = Math.floor(a);
  		var c = a - roundToYears;
  		var d = c * 12;
  		var roundToMonth = Math.round(d);
  		var resultYearExperience =
  			parseInt(roundToYears)
  				> 1 ? roundToYears + ' años' : roundToYears + ' año '
  		var resultMonthExperience =
  			parseInt(roundToMonth)
  				> 1 ? roundToMonth + ' meses' : roundToMonth + ' mes ';
  			return resultYearExperience + ' ' + resultMonthExperience
  	}
  render() {
      var dataRows = this.props.data;
      if (!dataRows.length) {
          return "Aún no completa su información";
      }
      var today =  (moment(new Date()).format("MMMM YY"));
      return(
          <div>
          {dataRows.map(data => {
            return (
              <div className="row">
              <div className="col-sm-8  mb-5">
                <h4 className="mt-3">
                  {data.Company.Name}
                  <span className="text-muted h6"> - {data.Industry.Name}</span>
                </h4>
                <h5 className="mb-1">{data.JobTitle}</h5>
                <small className="text-muted mt-3">{data.Job.Level.Name}</small>
                <ul className="text-muted mt-3">
                  {data.Activities.map(activity => {
                    return (
                      <li>{activity}</li>
                    )
                  })}
                </ul>
              </div>

              <div className="col-sm-4 text-sm-right">
                <p className="mt-3 mb-1">
                  {this.getExperience(data)}
                </p>
                <small className="text-muted mt-3">{moment(data.StartDate).format("MMMM YY")} - {(data.EndDate && moment(data.EndDate).format("MMMM YY")!==today) ? moment(data.EndDate).format("MMMM YY") : 'Actualidad'}</small>
              </div>
              </div>
            )
          })}
          </div>
        )
    }
}
