import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import Profile from './components/Profile';
import VerticalNavbar from './components/VerticalNavbar';
import Onboarding from './components/onboarding/Onboarding';
import CreateVacant from './components/createVacant/Vacant';
import ListItems from './components/ListItems';
import CandidatesDashboard from './components/CandidatesDashboard/CandidatesDashboardContainer';
import CandidatesReport from './components/CandidatesReport/CandidatesReportContainer';
import VacantsDashboard from './components/VacantsDashboard/VacantsDashboardContainer';
import MenuIconBar from './components/MenuIconBar';
import Sidebar from './components/Sidebar';
import CreateEnterprise from './components/Enterprise/EnterpriseContainer';
import Redirect from './components/Redirect';
import EditProfile from './components/Account/EditProfile'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const props = window.PROPS;
let componentID = '';
let component = null;


switch(props.path) {
    case 'home':
        componentID = 'login';
        component = Login;
        break;
    case 'register':
        componentID = 'register';
        component = Register;
        break;
    case 'changepassword':
        componentID = 'changepassword';
        component = ChangePassword;
        break;
    case 'profile':
        componentID = 'profile';
        component = Profile;
        break;
    case 'onboarding':
        componentID = 'onboarding';
        component = Onboarding;
        break;
    case 'crear_vacante':
        componentID = 'createVacant';
        component = CreateVacant;
        break;
    case 'cargar_vacante':
        componentID = 'editVacant';
        component = CreateVacant;
        break;
    case 'dashboard_candidatos':
        componentID = 'candidatesDashboard';
        component = CandidatesDashboard;
        break;
    case 'dashboard_vacantes':
        componentID = 'vacantsDashboard';
        component = VacantsDashboard;
        break;
    case 'reporte_candidatos':
        componentID = 'candidatesReport';
        component = CandidatesReport;
        break;
    case 'candidato_vacante':
        componentID = 'candidatesReport';
        component = CandidatesReport;
        break;
    case 'crear_empresa':
        componentID = 'createEnterprise';
        component = CreateEnterprise;
        break;
    case 'redireccionar':
        componentID = 'redirect';
        component = Redirect;
        break;
    case 'editProfile':
        componentID = 'editProfile';
        component = EditProfile;
        break;
    default:
        componentID = 'hello';
        break;
}

if(componentID == 'redirect') {
    ReactDOM.render(
        React.createElement(component, props)
        , document.getElementById(componentID)
    );
}


if(componentID !== 'hello') {
    ReactDOM.render(
        <Provider store={store}>
            {React.createElement(component, props)}
        </Provider>
        , document.getElementById(componentID)
    );
}


if(props.hasOwnProperty('verticalNavbar')) {

    ReactDOM.render(
        React.createElement(VerticalNavbar, props)
        , document.getElementById('verticalNavbar')
    );
}


if(props.hasOwnProperty('listItems')) {

    ReactDOM.render(
        <Provider store={store}>
            {React.createElement(ListItems, props)}
        </Provider>
        , document.getElementById('listitems')
    );
}


if(props.hasOwnProperty('menuIconBar')) {

    ReactDOM.render(
        <Provider store={store}>
            {React.createElement(MenuIconBar)}
        </Provider>
        , document.getElementById('menuIconBar')
    );
}

if(props.hasOwnProperty('sidebar')) {

    ReactDOM.render(
        <Provider store={store}>
            {React.createElement(Sidebar)}
        </Provider>
        , document.getElementById('sidebar')
    );
}
