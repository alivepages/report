import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialize, change, registerField } from 'redux-form';
import CandidatesReportPresentation from './CandidatesReportPresentation';
import CandidatesChartContainer from './CandidatesChartContainer';
import CandidatesTableContainer from './CandidatesTableContainer';
import CandidatesActions from './CandidatesActions';
import CandidatesMenu from './CandidatesMenu';
import CandidatesProfile from './CandidatesProfile';
import CandidatesResults from './CandidatesResults';


class CandidatesReportContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          profile: false,
          table: false
      };
      this.showProfile = this.showProfile.bind(this);
      this.hideProfile = this.hideProfile.bind(this);
      this.showTable = this.showTable.bind(this);
      this.hideTable = this.hideTable.bind(this);
    }
    showProfile() {
      this.setState({
        profile: true
      });
    }
    hideProfile() {
      this.setState({
        profile: false
      });
    }
    showTable() {
      this.setState({
        table: true
      });
    }
    hideTable() {
      this.setState({
        table: false
      });
    }
    getFiles(filesJson) {
      var files = [];
      for(var i = 1; i < 5; i++) {
        files[i] = filesJson.filter(item => {
          return item.FileType.Id == i
        }).map(item => {
          return item.ContentType.Id == 'video/mp4' ? 
            'https://s3-us-west-2.amazonaws.com/brive-yooin-users/files/' + item.Id : 'https://candidate.yooin.me/api/v1/files/' + item.Id
        });
        if (!files[i].length) {
          files[i] = null;
        }
      }
      return files;
    }
    getContentTypes(filesJson) {
      var files = [];
      for(var i = 1; i < 5; i++) {
        files[i] = filesJson.filter(item => {
          return item.FileType.Id == i
        }).map(item => {
          return item.ContentType.Id
        });
        if (!files[i].length) {
          files[i] = null;
        }
      }
      return files;
    }
    render() {
        if (!this.props.vacant || !this.props.candidate) {
          return <div>Cargando ... </div>;
        }
        var data = JSON.parse(this.props.vacant);
        var vacantId = this.props.vacantId;
        var candidate = JSON.parse(this.props.candidate);

        if (!candidate.User) {
          return <div>Acceso incorrecto </div>;
        }
        candidate.files = this.getFiles(candidate.User.Files);
        candidate.contentTypes = this.getContentTypes(candidate.User.Files);
        if (candidate.Name == null) {
          candidate.Name = 'El candidato';
        }
        var profile = this.state.profile;
        var table = this.state.table;
        var anonymous = this.props.anonymous;
        var urlBack = '#';
        if (!anonymous && data.VacantAnalyzed.VacantKeyShare) {
          urlBack = '/candidatos?v=' + data.VacantAnalyzed.Name + '&c=' + data.VacantAnalyzed.VacantKeyShare.KeyShare + '&iv=' + vacantId;
        }

        // ordenar
        data.CompetencesAnalyzed.sort(function (a, b){
          return (b.CandidateVacantGap - a.CandidateVacantGap)
        })
        return(

          <div>
            <div className="row ml-2 mr-2">
                <div className="col-lg-6">
                    <h2 className="text-primary">
                    {!anonymous ?
                      <a href={urlBack}>
                        <i className="ye-arrow fa fa-arrow-left mr-3" />
                      </a>
                    : null}
                        {data.VacantAnalyzed.Name}
                    </h2>
                </div>
                {!anonymous ? <CandidatesActions candidate={candidate}/> : <div/>}
            </div>
            <CandidatesReportPresentation candidate={candidate} data={data}/>
            <CandidatesMenu profile={profile} hideProfile={this.hideProfile} showProfile={this.showProfile}/>
            {profile ? <CandidatesProfile anonymous={anonymous} candidate={candidate}/> : <div/>}
            {!profile ? <CandidatesChartContainer data={data} candidateName={candidate.Name}/> : <div/>}
            {!profile && table ? <CandidatesTableContainer data={data} table={table} hideTable={this.hideTable} showTable={this.showTable}/> : <div/>}
            {!profile && !table ? <CandidatesResults data={data} candidateName={candidate.Name} table={table} hideTable={this.hideTable} showTable={this.showTable}/> : <div/>}
          </div>
        )
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        loadValues: (form, data) => {
            dispatch(initialize(form, data));
        },
        isLoading: (loading) => {
            dispatch(isLoading(loading));
        },
        change: (formId, field, value) => {
            dispatch(change(formId, field, value))
        },
        registerField: (formId, field, type) => {
            dispatch(registerField(formId, field, type))
        }
    }
};

export default connect(null, mapDispatchToProps)(CandidatesReportContainer);
