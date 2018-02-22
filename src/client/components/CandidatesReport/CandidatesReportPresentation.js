import React from 'react';
import Video from './Video';
import moment from 'moment';
import Avatar from '../Avatar';

export default class CandidatesReportPresentation extends React.Component {
  calculateAge(birthday) {
      if (!birthday) {
        return '';
      }
      var birthdayDate = new Date(birthday)
      var ageDifMs = Date.now() - birthdayDate.getTime();
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970) + ' años';
  }
  getSalary(JobPreferences) {
    var salary = [];
    for(var i = 1; i < 3; i++) {
      salary[i] = JobPreferences.filter(item => {
        return item.Type.Id == i
      });
      if (salary[i][0].Value) {
        salary[i].FormatValue = '$' + parseFloat(salary[i][0].Value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }
    }
    if (salary.length < 2) {
      return '';
    }
    return salary[1].FormatValue + ' - ' + salary[2].FormatValue;
  }
  getLink(link, array){
    if(array.length > 0 ) {

      var totalLinks = array.length - 1;

      if(link == 'link' && array[totalLinks].URL != "null" && totalLinks == 11) {
        return (
          <a className={`btn btn-sm btn-link icon mr-2`} title="" target="_blank" href={array[totalLinks].URL}>link</a>
        )
      }

      if(link == 'skype' && array[7].URL != "null" && totalLinks == 11) {
        return (
          <a className={`btn btn-sm btn-skype icon mr-2`} title="" target="_blank" href={array[7].URL}>skype</a>
        )
      }

      var found = array.filter(item => {
        return item.URL.indexOf(link) >= 0
      })

      if (found.length > 0) {

        if(link == 'stackoverflow')
          link = 'stack-overflow';

        if(link == 'angel')
          link = 'angellist';

        return (
          <a className={`btn btn-sm btn-${link} icon mr-2`} title="" target="_blank" href={found[0].URL}>{link}</a>
        )
      }
    } else {
      return null
    }
  }
  getPreferences(array) {
    return array.filter(item => {
      return item.Type.Id === 6
    }).map((item, index) => {
      return <button key={index} type="button" className="btn btn-primary ye-btn-xs mb-2 mr-2 pt-1 pb-1 pr-4 pl-4 mb">{item.Value}</button>
    })
  }
  getExperience(data){
    var today =  (moment(new Date()).format('YYYY-MM-DD')) + 'T00:00:00';
    // ordenar ascendente por año inicial
    data.sort((a, b) => {return a.StartDate - b.StartDate});
    // sumar todos los dias
    var experienceDay = 0;
    for (var i = 0; i < data.length; i++) {
      var JobStart =  data[i].StartDate;
      var JobEnd =  data[i].EndDate === null ? today : data[i].EndDate;
      // si se superpone tomar como ininial el mayor
      if (i > 0) {
        var JobEndPrev =  data[i-1].EndDate === null ? today : data[i-1].EndDate;
      }
      if (i > 0 && JobEndPrev > JobStart) {
        JobStart = JobEndPrev;
      }
      experienceDay += moment(JobEnd).diff(JobStart, 'days', false);
    }
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
      var candidate = this.props.candidate;
      var data = this.props.data;
      return(
            <div className="row m-0 ml-sm-2 mr-sm-2">
              <div className="col-md-3 mt-5">
                <div className="card boxshadow-xs playerBox">
                  <Video video={candidate.files[2]} contentType={candidate.contentTypes[2]}/>
                </div>
              </div>

              <div className="col-md-9 mt-5">
                <div className="card boxshadow-xs playerBox">
                    <div className="row m-3">
                          <div className="col-sm-3 col-md-3 mt-3 ye-crop ye-avatar-user-icon text-center">
                            <div className="float-right ye-afinity text-primary d-none d-sm-none">
                              <span>{data.VacantAfinity} %</span>
                              <br/> <small>Afinidad</small>
                            </div>
                            <Avatar
                                center={true}
                                width="100"
                                height="100"
                                url={candidate.files[1]}
                            />
                            <div className="text-center ye-afinity text-primary d-block d-sm-none mb-3">
                              <span className="d-block">{data.VacantAfinity} %</span>
                              <small>Afinidad</small>
                            </div>
                          </div>

                          <div className="col-sm-9 col-md-9 pl-0 pl-3 text-center text-md-left">
                            <div className="float-right ye-afinity text-primary d-none d-sm-block">
                              <span>{data.VacantAfinity} %</span>
                              <br/> <small>Afinidad</small>
                            </div>
                            <p>
                              <b className="d-block d-sm-inline">{candidate.User.Name}</b> {this.calculateAge(candidate.BirthDate)}
                              <br/>{data.VacantAnalyzed.Name}
                            </p>
                            {this.getPreferences(candidate.JobPreferences)}
                            <p className="mt-5 mt-md-4 mt-lg-0">
                              {candidate.Bio}
                            </p>
                            <div className="ye-social">
                              {this.getLink('link', candidate.Links)}
                              {this.getLink('linkedin', candidate.Links)}
                              {this.getLink('facebook', candidate.Links)}
                              {this.getLink('twitter', candidate.Links)}
                              {this.getLink('behance', candidate.Links)}
                              {this.getLink('skype', candidate.Links)}
                              {this.getLink('github', candidate.Links)}
                              {this.getLink('dribbble', candidate.Links)}
                              {this.getLink('angel', candidate.Links)}
                              {this.getLink('stackoverflow', candidate.Links)}
                              {this.getLink('instagram', candidate.Links)}
                              {this.getLink('youtube', candidate.Links)}
                            </div>
                          </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-sm-3 mb-4 mb-sm-0 text-center">
                          <i className="fa fa-briefcase d-block" />
                          <small>Experiencia <br/> {this.getExperience(candidate.Experiences)}</small>
                        </div>
                        <div className="col-sm-3 mb-4 mb-sm-0 text-center">
                          <i className="fa fa-cubes d-block" />
                          <small>Nivel <br/> {candidate.JobLevel.Name}</small>
                        </div>
                        <div className="col-sm-3 mb-4 mb-sm-0 text-center">
                          <i className="fa fa-dollar d-block" />
                          <small>Salario deseado <br/> {this.getSalary(candidate.JobPreferences)}</small>
                        </div>
                        <div className="col-sm-3 mb-4 mb-sm-0 text-center">
                          <i className="fa fa-map-marker d-block" />
                          <small>Ubicación <br/> {candidate.Locations.length ? candidate.Locations[0].Name : ''}</small>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}
